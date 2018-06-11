<template>
    <div id="app">
        <v-app light>
            <v-container>
                <v-layout column>
                    <t-play style="max-width: 80em;margin-left: auto;margin-right:auto" :film="intro"></t-play>
                    <transition name="slide-y-reverse-transition">
                        <span v-if="introEnd">
                            <span class="phrase head mid">Nos achats sont de véritables bulletins de vote!</span>
                            <br>
                            <br>
                            <br>
                            <div class="phrase">Et si on voyait derrière les produits ?</div>
                            <br>
                            <br>
                            <img class="logo" src="logo/foret.svg"/>
                            <br>
                            <br>
                            <br>
                            <br>
                            <div class="phrase">Acheter n'est plus seulement obtenir un objet ou utiliser un service.</div>
                            <br>
                            <div class="phrase">C'est permettre au fabricant à continuer dans la même voie.</div>

                            <!--<br>-->
                            <!--<br>-->
                            <!--<div class="phrase">Et si les fabricants pouvaient montrer ce qu'ils font pour la planète ?</div>-->
                            <!--<div class="phrase">Et si on pouvait proposer aux fabricants les changements que l'on veut ?</div>-->
                            <!--<img class="logo" src="logo/produits.svg"/>-->
                            <br>
                            <br>
                            <br>
                            <br>
                            <v-toolbar class="carousel">
                                <v-toolbar-title>100mg de vitamines C c'est...</v-toolbar-title>
                            </v-toolbar>
                            <v-carousel interval="30000" hide-delimiters>
                                <v-carousel-item>
                                    <v-card><img class="logo" src="img/pomme.svg" style="max-width:50%"/></v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>1 Pomme, en 1950</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-card><img class="logo" src="img/pommes.svg" style="max-width:50%"/></v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>10kg de pommes, aujourd'hui</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-card>
                                        <v-card-text class="phrase" style="height:13.6em"><br><br><br><br><br>Vous connaissez des choses sur la vitamine C ?</v-card-text>
                                    </v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>Partagez-le sur BlueForest</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                            </v-carousel>

                            <br>
                            <br>
                            <br>

                            <v-toolbar class="carousel">
                                <v-toolbar-title>1 litre d'eau c'est...</v-toolbar-title>
                            </v-toolbar>
                            <v-carousel interval="30000" hide-delimiters>
                                <v-carousel-item>
                                    <v-card><img class="logo" src="img/eau.svg" style="max-width:50%"/></v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>en cours...</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-card>
                                        <v-card-text class="phrase" style="height:13.6em;margin-left: auto;margin-right:auto"><br><br><br><br><br>Vous connaissez des choses sur l'eau ?</v-card-text>
                                    </v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>Partagez-le sur BlueForest</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                            </v-carousel>


                            <br>
                            <br>
                            <br>
                            <v-toolbar class="carousel">
                                <v-toolbar-title>1 tonne de CO2 c'est...</v-toolbar-title>
                            </v-toolbar>
                            <v-carousel interval="30000" hide-delimiters>
                                <v-carousel-item>
                                    <v-card><img class="logo" src="img/co2.svg" style="max-width:50%"/></v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>en cours...</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-card>
                                        <v-card-text class="phrase" style="height:13.6em"><br><br><br><br><br>Vous connaissez des choses sur le CO2 ?</v-card-text>
                                    </v-card>
                                    <v-toolbar>
                                        <v-toolbar-title>Partagez-le sur BlueForest</v-toolbar-title>
                                    </v-toolbar>
                                </v-carousel-item>
                            </v-carousel>
                            <br>
                            <br>
                            <br>


                            <br>
                            <br>
                            <div class="phrase">Elevons le niveau ensemble.</div>
                            <div class="phrase">Donnons-nous les moyens de mieux choisir sans se priver.</div>
                            <br>
                            <v-card v-if="done" transition="scale-transition" origin="center center" class="carousel">
                                <t-play :film="outro"></t-play>
                            </v-card>
                            <v-card v-else class="carousel">
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
                            <br>
                            <img class="logo" src="logo/produits.svg" style="min-width:20em;height:auto"/>
                            <br>
                            <br>
                            <br>
                        </span>
                    </transition>
                </v-layout>
            </v-container>
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