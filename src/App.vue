<script setup>
import HomeSection from './components/HomeSection.vue';
import AboutMe from './components/AboutMe.vue';
import MyProject from './components/MyProject.vue';
import ContactMe from './components/ContactMe.vue';
</script>
<template>
	<nav class="h-14 bg-old-lace fixed w-screen top-0 left-0 shadow">
		<div class="flex flex-wrap mx-auto my-auto pt-4 items-center justify-center">
			<div class="flex md:order-2">
				<button data-collapse-toggle="navbar-sticky" type="button"
					class="inline-flex p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-sticky" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"></path>
					</svg>
				</button>
			</div>
			<div class="hidden w-full md:flex md:w-auto" id="navbar-sticky">
				<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
					<li>
						<a href="#home"
							class="block py-2 pl-8 pr-4 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0">Home</a>
					</li>
					<li>
						<a href="#about-me"
							class="block py-2 pl-8 pr-4 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0">About
							Me</a>
					</li>
					<li>
						<a href="#projects"
							class="block py-2 pl-8 pr-4 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0">Projects</a>
					</li>
					<li>
						<a href="#contact-me"
							class="block py-2 pl-8 pr-4 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green md:p-0">Contact
							Me</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<HomeSection></HomeSection>
	<AboutMe></AboutMe>
	<MyProject></MyProject>
	<ContactMe></ContactMe>
	<!-- <HomeSection></HomeSection> -->

	<!-- <RouterView /> -->
</template>
