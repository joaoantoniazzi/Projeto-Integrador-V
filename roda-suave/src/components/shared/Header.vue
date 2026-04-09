<script lang="ts" setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '../../stores/userStore';
import { logoutUser } from '../auth/AuthScript';

defineProps(['title']);

const isDropdownOpen = ref(false);
const userStore = useUserStore();

const userDisplayName = computed(() => {
    if (!userStore.user) return 'Arthur Dent';
    return userStore.profile?.name || userStore.profile?.email || 'User';
});

const avatarSrc = computed(() => {
    const url = new URL('https://api.dicebear.com/9.x/notionists-neutral/svg');
    url.searchParams.set('seed', userDisplayName.value);
    url.searchParams.set('size', '40');
    return url.href;
});

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const handleDocumentClick = () => closeDropdown();

onMounted(() => {
    document.addEventListener('click', handleDocumentClick);
});

onUnmounted(() => {
    document.removeEventListener('click', handleDocumentClick);
});
</script>
<template>
    <header class="header">
        <div>
            <h2 class="header__title">{{ title }}</h2>
            <p class="header__subtitle">
                Tudo rodando suave hoje
            </p>
        </div>

        <div class="header__user" @click.stop="toggleDropdown">
            <div class="header__avatar">
                <img :src="avatarSrc" alt="Avatar" />
            </div>

            <div v-if="isDropdownOpen" class="dropdown" @click.stop>
                <span class="dropdown__username">Olá, {{ userDisplayName }}</span>

                <hr class="dropdown__divider">

                <button @click="logoutUser" class="dropdown__item red">
                    <span class="material-symbols-outlined">logout</span>
                    Sair
                </button>
            </div>
        </div>
    </header>
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

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    &__title {
        font-size: 1.5rem;
        font-weight: 800;
        color: $text;
    }

    &__subtitle {
        color: $text-soft;
    }

    &__user {
        height: fit-content;
        position: relative;
        cursor: pointer;
    }

    &__avatar {
        width: 40px;
        height: 40px;
        border: 1px solid $border;
        border-radius: 50%;
        overflow: hidden;
    }
}

.dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background: white;
    border: 1px solid $border;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 200px;
    cursor: default;
    padding: 0.5rem 0.75rem 0.75rem;

    &__username {
        display: block;
        padding: 0.5rem;
        font-weight: 600;
        color: $text;
    }

    &__divider {
        background-color: $border;
        display: flex;
        margin: 0 auto;
        height: 1px;
    }

    &__item {
        width: 100%;
        padding: 0.25rem 0.5rem;
        background: none;
        border: none;
        border-radius: .25rem;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .25rem;
        margin-top: .5rem;

        span[class^="material-symbols"] {
            font-size: 1rem;
        }

        &:hover {
            background: #f3f4f6;
        }

        &.red {
            color: #c50b0b;
        }
    }
}
</style>