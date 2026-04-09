<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/userStore';

import Sidebar from '../shared/Sidebar.vue';
import Header from '../shared/Header.vue';

const userStore = useUserStore();
const router = useRouter();
</script>

<template>
    <div class="dashboard-layout">
        <Sidebar />

        <main class="dashboard">
            <Header title="Dashboard" />

            <section class="card">
                <div class="card__header">
                    <h3>Veículos da Frota</h3>
                    <button class="btn btn--primary" @click="() => router.push('/register-vehicle')">
                        + Adicionar
                    </button>
                </div>

                <span class="card__empty">Nada ainda por aqui...</span>
            </section>
        </main>
    </div>
</template>

<style lang="scss">
@use '/src/styles/variables.scss' as vars;
@use '/src/styles/btn.scss';

.dashboard {
    flex: 1;
    padding: 2rem;

    &-layout {
        display: flex;
        min-height: 100vh;
        background: vars.$bg;
    }
}

.card {
    background: vars.$card;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        h3 {
            font-weight: 700;
        }
    }

    &__empty {
        display: flex;
        margin: 20px auto;
        color: vars.$text-soft;
        width: fit-content;
    }
}
</style>