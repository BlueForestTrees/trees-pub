<template>
    <div id="app">
        <v-app light>
            <v-layout column>
                <t-play style="max-width: 80em;margin-left: auto;margin-right:auto" :film="intro"></t-play>
                <transition name="slide-y-reverse-transition">
                    <v-flex v-if="introEnd">
                        <div class="phrase">Nos achats sont de vrais bulletins de vote...</div>
                        <br>
                        <br>
                        <br>
                        <div class="phrase">Et si on voyait ce qui se cache derrière nos produits ?</div>
                        <br>
                        <br>
                        <img class="logo" src="logo/foret.svg"/>
                        <br>
                        <br>
                        <br>
                        <br>
                        <!--<br>-->
                        <!--<br>-->
                        <!--<div class="phrase">Et si les fabricants pouvaient montrer ce qu'ils font pour la planète ?</div>-->
                        <!--<div class="phrase">Et si on pouvait proposer aux fabricants les changements que l'on veut ?</div>-->
                        <!--<img class="logo" src="logo/produits.svg"/>-->
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <v-carousel style="max-width: 40em;min-width:20em;height:auto;margin-left: auto;margin-right:auto" hide-delimiters>
                            <h1>On trouve 100mg de vitamines C dans...</h1>
                            <v-carousel-item>
                                <img class="logo" src="img/pomme.svg" style="max-width:50%"/>
                                <v-toolbar>
                                    <v-toolbar-title>1 Pomme, en 1950</v-toolbar-title>
                                </v-toolbar>
                            </v-carousel-item>
                            <v-carousel-item>
                                <img class="logo" src="img/pommes.svg" style="max-width:50%"/>
                                <v-toolbar>
                                    <v-toolbar-title>10kg de pommes, aujourd'hui</v-toolbar-title>
                                </v-toolbar>
                            </v-carousel-item>
                            <v-carousel-item>
                                <br>
                                <br>
                                <br>
                                <div class="phrase">Vous connaissez des choses pointues en vitamine C ?</div>
                                <br>
                                <br>
                                <div class="phrase">Ajoutez-les sur BlueForest</div>
                                <br>
                                <br>
                                <br>
                                <br>
                            </v-carousel-item>
                        </v-carousel>
                        <!--<div class="phrase">Un filet d'espadon a nécessité 200kg de phyto-plancton.</div>-->
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <div class="phrase">Ensemble, élevons le niveau de la discussion.</div>
                        <div class="phrase">Donnons-nous les moyens de mieux choisir sans se priver.</div>
                        <br>
                        <br>
                        <v-card v-if="done" transition="scale-transition" origin="center center" style="margin-left: auto;margin-right:auto">
                            <t-play :film="outro"></t-play>
                        </v-card>
                        <v-card v-else style="max-width: 40em;min-width:20em;margin-left: auto;margin-right:auto">
                            <v-toolbar card dark color="primary">
                                <v-icon large>add_alert</v-icon>
                                <v-toolbar-title>Intéressé par la suite?</v-toolbar-title>
                            </v-toolbar>
                            <v-container fluid>
                                <v-form v-model="valid" v-on:submit.prevent="validate" ref="form">
                                    <v-text-field type="mail" label="mail" v-model="mail" required :rules="[rules.required, rules.email]"/>
                                    <v-text-field type="text" label="commentaire" v-model="message" multi-line required :rules="[rules.required, rules.minlength, rules.maxlength]" counter="250"/>
                                </v-form>
                            </v-container>
                            <v-card-actions>
                                <v-btn block @click="validate" large color="green">
                                    <v-icon x-large color="white">check</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <br>
                        <br>
                        <br>
                        <br>
                        <img class="logo" src="logo/produits.svg" style="min-width:20em;height:auto"/>
                        <br>
                        <br>
                        <br>
                    </v-flex>
                </transition>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
    import req from 'request-promise-lite';
    import TPlay from "../draw/Play";
    import {getFilmByName} from "../rest/api";
    import {play} from "../draw/playerControl";

    const url = window.location.href + "api/feedback";
    const send = body => req.post(url, {body, json: true});
    const introTitle = "blue-forest";
    const outroTitle = "merci";

    export default {
        name: 'app',
        components: {TPlay},
        beforeCreate: function () {
            getFilmByName(introTitle)
                .then(film => {
                    if (film) {
                        this.intro = film;
                        play(this.intro);
                    } else {
                        this.introEnd = true;
                    }
                }).catch(() => this.introEnd = true);
            getFilmByName(outroTitle)
                .then(f => this.outro = f);
        },
        data: function () {
            return {
                egg: null,
                intro: null,
                outro: null,
                introEnd: false,
                mail: null,
                message: null,
                valid: null,
                done: false,
                rules: {
                    required: (value) => !!value || '',
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || 'Adresse mail invalide';
                    },
                    minlength: value => !value || value.length >= 10 || "Faites un message plus long s'il vous plaît :)",
                    maxlength: value => !value || value.length <= 250 || "Un peu plus court s'il vous plaît :) :)"
                }
            }
        },
        methods: {
            validate: function () {
                this.$refs.form.validate();
                if (this.valid) {
                    send({mail: this.mail, message: this.message})
                        .then(v => {
                            if (v.n === 1 && v.ok === 1) {
                                this.done = true;
                            }
                        });
                }
            }
        },
        watch: {
            'intro.f.player.playing': function (v) {
                if (!v) {
                    this.introEnd = true;
                }
            },
            done: function (v) {
                if (v) {
                    play(this.outro);
                }
            }
        }
    }
</script>