<script lang="ts" setup>
import { useRouter } from 'vue-router';

import Sidebar from "../shared/Sidebar.vue";
import Header from "../shared/Header.vue";

const router = useRouter();
</script>
<template>
    <div class="dashboard-layout">
        <Sidebar />

        <main class="dashboard">
            <Header title="Registrar veículo" />

            <form class="form">
                <section class="form__step">
                    <div class="form__step-wrapper">
                        <div class="form__step-indicator form__step-indicator--active"></div>

                        <div class="form__card">
                            <h2 class="form__section-title">Dados do veículo</h2>

                            <div class="form__grid">
                                <div class="form__group">
                                    <label class="form__label">Marca</label>
                                    <input class="form__input" placeholder="Ex: Fiat" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Modelo</label>
                                    <input class="form__input" placeholder="Ex: Uno" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Ano/Versão</label>
                                    <input class="form__input" placeholder="Ex: 2003" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Valor FIPE</label>

                                    <div class="form__input-wrapper">
                                        <span class="form__prefix">R$</span>
                                        <input class="form__input form__input--readonly" readonly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="form__step">
                    <div class="form__step-wrapper">
                        <div class="form__step-indicator"></div>

                        <div class="form__card">
                            <h2 class="form__section-title">Identificação</h2>

                            <div class="form__grid">
                                <div class="form__group">
                                    <label class="form__label">Placa</label>
                                    <input class="form__input" placeholder="ABC1D23" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Cor</label>
                                    <input class="form__input" placeholder="Branco" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">KM Atual</label>
                                    <input class="form__input" type="number" />
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Condição</label>
                                    <select class="form__input">
                                        <option>Novo</option>
                                        <option>Seminovo</option>
                                        <option>Usado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="form__step">
                    <div class="form__step-wrapper">
                        <div class="form__step-indicator"></div>

                        <div class="form__card">
                            <h2 class="form__section-title">Manutenção</h2>

                            <div class="form__grid">
                                <div class="form__group">
                                    <label class="form__label">Troca de óleo</label>
                                    <select class="form__input">
                                        <option>5.000 KM</option>
                                        <option>10.000 KM</option>
                                    </select>
                                </div>

                                <div class="form__group">
                                    <label class="form__label">Combustível</label>
                                    <select class="form__input">
                                        <option>Flex</option>
                                        <option>Gasolina</option>
                                        <option>Diesel</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="form__step">
                    <div class="form__step-wrapper">
                        <div class="form__step-indicator"></div>

                        <div class="form__card">
                            <div class="form__card-header">
                                <h2 class="form__section-title">Imagens</h2>
                                <span class="form__badge">Opcional</span>
                            </div>

                            <div class="form__upload">
                                <span class="material-symbols-outlined">
                                    cloud_upload
                                </span>

                                <p class="form__upload-title">Enviar imagem</p>
                                <p class="form__upload-subtitle">
                                    Clique ou arraste arquivos
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="form__footer">
                    <button class="btn btn--ghost" type="button" @click="() => router.push('/dashboard')">
                        Cancelar
                    </button>

                    <button class="btn btn--primary" type="submit">
                        Registrar Veículo
                    </button>
                </footer>
            </form>
        </main>
    </div>
</template>
<style src="/src/styles/form.scss"></style>