<template>
	<section class="bg-green w-full h-max top-0 left-0 flex" id="contact-me">
		<div class="container mx-auto ml-20 mr-20">
			<div class="flex justify-center">
				<h1 class="text-old-lace text-6xl font-bold mt-24">Contact Me</h1>
			</div>
			<div class="flex justify-center">
				<form ref="form" @submit.prevent="sendEmail" class="w-7/12 mt-16">
					<div class="flex flex-wrap">
						<div class="w-1/2 md:w-1/2 px-3">
							<label class="block tracking-wide text-old-lace text-m font-bold mb-2" for="name">
								Name
							</label>
							<input
								class="appearance-none block w-full bg-old-lace text-old-green border-old-green rounded-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600"
								id="name" v-model="name" type="text" placeholder="Enter your first name">
						</div>
						<div class="w-1/2 md:w-1/2 px-3">
							<label class="block tracking-wide text-old-lace text-m font-bold mb-2" for="email">
								Email
							</label>
							<input
								class="appearance-none block w-full bg-old-lace text-old-green border-old-green rounded-full rounded py-3 px-4 leading-tight focus:outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600"
								id="email" v-model="email" type="text" placeholder="Enter your email">
						</div>
					</div>
					<div class="flex flex-wrap mt-2">
						<div class="w-full px-3">
							<label class="block tracking-wide text-old-lace text-m font-bold mb-2" for="subject">
								Email Subject
							</label>
							<input
								class="appearance-none block w-full bg-old-lace text-old-green border-old-green rounded-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600"
								id="subject" v-model="subject" type="text" placeholder="Enter your email subject">
						</div>
					</div>
					<div class="flex flex-wrap mt-2">
						<div class="w-full px-3">
							<label class="block tracking-wide text-old-lace text-m font-bold mb-2" for="message">
								Message
							</label>
							<input
								class="appearance-none block w-full bg-old-lace text-old-green border-old-green rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-600"
								id="message" v-model="message" type="text" placeholder="What do you want to discuss?">
						</div>
					</div>
					<div class="mt-8 mb-24 flex justify-center">
						<button type="submit"
							class="bg-old-lace hover:bg-emerald-600 hover:text-white text-green font-medium text-xl py-2 px-8 rounded-full shadow mt-4 flex justify-center items-center text-center w-full mx-auto">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
	data() {
		return {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	},
	methods: {
		sendEmail() {
			emailjs.send('service_y27qrgs', 'template_s7osrob', {
				'name': this.name,
				'email': this.email,
				'subject': this.subject,
				'message': this.message
			}, 'rM00hFKSHOA7F2t3H').then(function (response) {
				console.log('SUCCESS!', response.status, response.text);
			}, function (error) {
				console.log('FAILED...', error);
			});
			this.name = ''
			this.email = ''
			this.subject = ''
			this.message = ''
		},
	}
}
</script>