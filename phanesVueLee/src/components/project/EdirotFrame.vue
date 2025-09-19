<script setup>
import api from '@/api/code/code_index.js';

const runApi = async () => {
    await api.codeRun()
}
</script>


<template>
    <nav class="navbar">
        <div class="navbar-left">
            <!-- 비어있지만 필요한 부분임 -->
        </div>

        <div class="navbar-right">
            <button class="run-button" @click="runApi()">Run Code</button>

            <!-- <svg class="settings-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z">
                </path>
            </svg> -->

            <!-- <a href="#" class="sign-in-btn">Sign in</a> -->
        </div>
    </nav>
</template>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f5f5f5;
}

.navbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    justify-content: space-between;
    position: relative;
}

.navbar-left {
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: hidden;
}

.navbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}

.logo {
    width: 24px;
    height: 24px;
    background-color: #343a40;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

.menu-item {
    color: #1d2938;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.2s;
    cursor: pointer;
    font-size: 14px;
    position: relative;
}

.menu-item:hover {
    background-color: #e9ecef;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    top: 100%;
    right: 0;
    margin-top: 4px;
}

.dropdown-content a {
    color: #1d2938;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
}

.dropdown-content a:hover {
    background-color: #f8f9fa;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-arrow::after {
    content: '▼';
    font-size: 10px;
    margin-left: 6px;
    color: #1d2938;
}

.run-button {
    background-color: #7bc6ff;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: background-color 0.2s;
    position: absolute;
    top: 23px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.run-button:hover {
    background-color: #3aa9fd;
}

.run-button::before {
    content: '▶';
    font-size: 12px;
}

.settings-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.settings-icon:hover {
    opacity: 1;
}

.sign-in-btn {
    color: #1d2938;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
}

@media (max-width: 590px) {
    .navbar-right>*:not(.logo) {
        display: none;
    }

    .navbar-left>*:not(.run-button) {
        display: none;
    }
}
</style>