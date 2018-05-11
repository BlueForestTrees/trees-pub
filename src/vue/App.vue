<template>
    <div id="app">
        <v-app light>
            <v-layout column>
                <t-play :film="intro"></t-play>
                <transition name="slide-y-reverse-transition">
                    <v-flex v-if="introEnd">
                        <div class="phrase">Nos achats sont de vrais bulletins de vote.</div>
                        <div class="phrase">Et si on savait se qui se cache derrière nos produits ?</div>
                        <div class="phrase">Et si on pouvait proposer directement aux fabricants les modifications que l'on veut ?</div>
                        <div class="phrase">Et si les fabricants pouvaient plus facilement montrer leur progrès ?</div>
                        <div class="phrase">Et si on avait un moteur de recherche de déchets ?</div>

                        <br>
                        <br>
                        <br>
                        <br>
                        <img class="logo" src="logo/foret.svg"/>

                        <!--<div class="phrase">Qu'est ce qui, dans mes achats, est plus ou moins "propre" ?</div>-->

                        <!--<div class="phrase">La bonne façon d'acheter</div>-->
                        <!--<div class="phrase">La bonne façon de vendre</div>-->
                        <!--<div class="phrase">Mieux faire, mieux vivre.</div>-->
                        <!--<div class="phrase">Construire le marché économique de demain</div>-->
                        <!--<br>-->
                        <!--<br>-->
                        <!--<br>-->
                        <!--<div class="phrase">Avoir de vraies informations avant d'acheter</div>-->
                        <!--<div class="phrase">Connaître, dans mes achats, ce qui ne semble pas écologique et qui pourtant l'est</div>-->
                        <!--<div class="phrase">Connaître, dans mes achats, ce qui semble écologique et qui pourtant ne l'est pas</div>-->
                        <!--<div class="phrase">Me faire une idée de l'impact de mes choix</div>-->
                        <!--<br>-->
                        <!--<br>-->
                        <!--<br>-->
                        <!--<div class="phrase">Vendre en amortissant mes décisions écologiques</div>-->
                        <!--<div class="phrase">Vendre en reportant les qualités écologiques de mes fournisseurs</div>-->
                        <!--<div class="phrase">Créer un marché dynamique et durable, imitant la nature</div>-->
                        <!--<div class="phrase">Visualiser les ressources nécessaires à la confection d'un produit</div>-->
                        <!--<div class="phrase">Accorder créateurs de déchets, acheteurs de matières premières, et experts en réutilisation</div>-->
                        <!--<div class="phrase">Demander des informations au sujet d'un produit</div>-->
                        <!--<div class="phrase">Booster mon entreprise en lui apportant de la transparence</div>-->
                        <!--<div class="phrase">Proposer des idées de changement: la R&D publique</div>-->
                        <!--<div class="phrase">Recueillir des idées de changement: la R&D publique</div>-->
                        <!--<div class="phrase">Comparer les ressources et les déchets de produits</div>-->
                        <!--<div class="phrase">Visualisez les faits grâce à des équivalences pertinentes</div>-->
                        <!--<div class="phrase">Construisez vos propres comparaisons environnementales</div>-->
                        <!--<div class="phrase">Créer des produits ou des compositions de services à partir de produits existants</div>-->
                        <!--<div class="phrase">Apporter mon expertise en documentant ou en indiquant les sources attestant une information</div>-->
                        <!--<div class="phrase">Diffuser et pérenniser une étude environnementale en la connectant au reste du monde</div>-->
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="pphrase">BlueForest est une plateforme numérique un peu unique. Des experts de différents secteurs, des entreprises, des associations et des particuliers pourront collecter et de connecter des informations sur les matières premières, l'énergie, les déchets... Et ainsi construire une base de connaissances inédite et
                            utilisable par tout le monde.
                        </div>

                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="phrase">Exemple d'informations qui se construisent petit à petit sur Blueforest:</div>
                        <div class="phrase">Pour le co2, acheter 1kg de tomate en hiver revient à acheter 1 tonne de tomate en été.</div>
                        <div class="phrase">Il y a autant de vitamines C dans 1 pomme en 1950 que dans 20kg de pommes aujourd'hui.</div>
                        <div class="phrase">Un filet d'espadon a nécessité 200kg de phyto-plancton.</div>
                        <div class="phrase">200kg de phyto-plancton absorbe autant de co2 en un an qu'en émet une voiture en 15 minutes.</div>
                        <br>
                        <br>
                        <img class="logo" src="logo/produits.svg"/>
                        <br>
                        <br>
                        <div class="phrase">Ensemble, élevons le niveau de la discussion en matière d'environnement.</div>
                        <div class="phrase">Donnons-nous les moyens de mieux choisir sans se priver.</div>
                        <br>
                        <br>
                        <center>

                            <v-card v-if="done" transition="scale-transition" origin="center center">
                                <t-play :film="outro"></t-play>
                            </v-card>
                            <v-card v-else style="max-width: 50%;min-width:40em">
                                <v-toolbar card dark color="primary">
                                    <v-icon large>add_alert</v-icon>
                                    <v-toolbar-title>Tout le monde décide, tout le monde propose</v-toolbar-title>
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
                        </center>
                        <br>
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
                });
            getFilmByName(outroTitle)
                .then(f => this.outro = f);
        },
        data: function () {
            return {
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