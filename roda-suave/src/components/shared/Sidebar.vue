<script lang="ts" setup></script>
<template>
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
</style>