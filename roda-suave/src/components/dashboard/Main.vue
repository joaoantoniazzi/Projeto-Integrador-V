<script lang="ts" setup>
</script>

<template>
    <div class="dashboard-layout">
        <aside class="sidebar">
            <div class="sidebar__brand">
                <h1 class="sidebar__logo">Roda<span>Suave</span></h1>
            </div>

            <nav class="sidebar__nav">
                <a class="sidebar__link sidebar__link--active">
                    <span class="material-symbols-outlined">dashboard</span>
                    Início
                </a>
            </nav>
        </aside>

        <main class="dashboard">
            <header class="dashboard__header">
                <div>
                    <h2 class="dashboard__title">Dashboard</h2>
                    <p class="dashboard__subtitle">
                        Tudo rodando suave hoje
                    </p>
                </div>

                <div class="dashboard__user">
                    <div class="dashboard__avatar"></div>
                </div>
            </header>

            <section class="card">
                <div class="card__header">
                    <h3>Veículos da Frota</h3>
                    <button class="btn-primary">+ Adicionar</button>
                </div>

                <span class="card__empty">Nada ainda por aqui...</span>
            </section>
        </main>
    </div>
</template>

<style lang="scss">
$primary: #2563eb;
$primary-dark: #1e3a8a;
$success: #22c55e;

$bg: #f9fafb;
$card: #ffffff;
$text: #111827;
$text-soft: #6b7280;
$border: #e5e7eb;

.dashboard-layout {
    display: flex;
    min-height: 100vh;
    background: $bg;
}

.sidebar {
    width: 240px;
    background: white;
    border-right: 1px solid $border;
    padding: 1.5rem;

    &__brand {
        margin-bottom: 2rem;
    }

    &__logo {
        font-size: 1.5rem;
        font-weight: 900;

        span {
            color: $primary;
        }
    }

    &__nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    &__link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        color: $text-soft;
        cursor: pointer;

        &:hover {
            background: #f3f4f6;
        }

        &--active {
            background: rgba($primary, 0.1);
            color: $primary;
            font-weight: 600;
        }
    }
}

.dashboard {
    flex: 1;
    padding: 2rem;

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    &__title {
        font-size: 1.5rem;
        font-weight: 800;
        color: $text;
    }

    &__subtitle {
        color: $text-soft;
    }

    &__avatar {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, $primary, $primary-dark);
        border-radius: 50%;
    }
}

.card {
    background: $card;
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
        color: $text-soft;
        width: fit-content;
    }
}

.btn-primary {
    background: linear-gradient(135deg, $primary, $primary-dark);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
}
</style>