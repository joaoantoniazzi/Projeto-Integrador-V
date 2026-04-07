<script setup lang="ts">
    import { ref } from "vue";
    import { login } from "./AuthScript";
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "../../firebase";

    const email = ref("");
    const senha = ref("");

    onAuthStateChanged(auth, (user) => {

    if (user) {
        
        // DEFINE O QUE ACONTECE QUANDO O USUÁRIO ESTÁ LOGADO
        //
        // Temos que mexer nisso quando tivermos uma home pronta

        window.alert("Você já está logado!");
    }

    });

    function fazerLogin() {
        login(email.value, senha.value);
    }
</script>

<template>
    <main class="auth-card">
        <section class="auth-card__brand-side cockpit-gradient">
            <div class="auth-card__brand-content">
                <h1 class="auth-card__brand-title">Roda Suave</h1>
                <p class="auth-card__brand-tagline">
                    Gestão que roda sem trancos
                </p>
            </div>

            <div class="auth-card__brand-overlay">
                <img class="auth-card__overlay-img"
                    src="https://img.freepik.com/free-photo/female-mechanic-fixing-car-wheels_23-2148327581.jpg"
                    alt="Manutenção de veículos" />
            </div>
        </section>

        <section class="auth-card__form-side">
            <div class="auth-card__form-container">
                <header class="auth-card__form-header">
                    <h2 class="auth-card__form-title">
                        Entrar na conta
                    </h2>
                </header>

                <form class="auth-card__registration-form">
                    <div class="auth-card__input-group">
                        <label class="auth-card__field-label">
                            Email
                        </label>

                        <div class="auth-card__input-wrapper">
                            <span class="material-symbols-outlined auth-card__input-icon">
                                alternate_email
                            </span>
                            <input v-model="email" class="auth-card__form-input" placeholder="joao@rodasuave.com" type="email"
                                required />
                        </div>
                    </div>

                    <div class="auth-card__input-group">
                        <label class="auth-card__field-label">
                            Senha
                        </label>

                        <div class="auth-card__input-wrapper">
                            <span class="material-symbols-outlined auth-card__input-icon">
                                lock
                            </span>
                            <input v-model="senha" class="auth-card__form-input" placeholder="••••••••" type="password" required />
                        </div>
                    </div>

                    <button class="auth-card__submit-button" type="button" @click="fazerLogin">
                        <span>Entrar</span>

                        <span class="material-symbols-outlined auth-card__btn-icon">
                            arrow_forward
                        </span>
                    </button>
                </form>

                <footer class="auth-card__form-footer">
                    <p class="auth-card__footer-text">
                        Não tem uma conta?
                        <router-link class="auth-card__login-link" to="/register">
                            Criar conta
                        </router-link>
                    </p>
                </footer>
            </div>
        </section>
    </main>

    <div class="bg-decoration bg-decoration--top-right"></div>
    <div class="bg-decoration bg-decoration--bottom-left"></div>
</template>

<style src="./Auth.scss"></style>
