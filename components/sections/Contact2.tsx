"use client";

import { useState } from 'react';

interface FormData {
	name: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
}

export default function Contact2() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	});
	const [status, setStatus] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setLoading(true);
		setStatus('');

		try {
			// EmailJS configuration
			const serviceId = 'service_kn8rm0s';
			const templateId = 'template_7mhjxwu';
			const publicKey = 'I9ogT2qVzbjS1amLJ';

			// Prepare template parameters
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				phone: formData.phone,
				subject: formData.subject,
				message: formData.message,
				to_name: 'Mehedi Hasan',
			};

			// Send email using EmailJS REST API
			const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					service_id: serviceId,
					template_id: templateId,
					user_id: publicKey,
					template_params: templateParams,
				}),
			});

			if (response.ok) {
				setStatus('success');
				// Reset form
				setFormData({
					name: '',
					phone: '',
					email: '',
					subject: '',
					message: ''
				});
			} else {
				setStatus('error');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			setStatus('error');
		} finally {
			setLoading(false);
			// Clear status message after 5 seconds
			setTimeout(() => setStatus(''), 5000);
		}
	};

	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let&apos;s connect</h3>
									<div>
										<div className="row g-3">
											<div className="col-md-6">
												<input
													type="text"
													className="form-control bg-3 border border-1 rounded-3"
													id="name"
													name="name"
													placeholder="Your name"
													aria-label="username"
													value={formData.name}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="tel"
													className="form-control bg-3 border border-1 rounded-3"
													id="phone"
													name="phone"
													placeholder="Phone"
													aria-label="phone"
													value={formData.phone}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="email"
													className="form-control bg-3 border border-1 rounded-3"
													id="email"
													name="email"
													placeholder="Email"
													aria-label="email"
													value={formData.email}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="col-md-6">
												<input
													type="text"
													className="form-control bg-3 border border-1 rounded-3"
													id="subject"
													name="subject"
													placeholder="Subject"
													aria-label="subject"
													value={formData.subject}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="col-12">
												<textarea
													className="form-control bg-3 border border-1 rounded-3"
													id="message"
													name="message"
													placeholder="Message"
													aria-label="With textarea"
													rows={5}
													value={formData.message}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="col-12">
												<button
													type="button"
													className="btn btn-primary-2 rounded-2"
													onClick={handleSubmit}
													disabled={loading}
												>
													{loading ? 'Sending...' : 'Send Message'}
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
											{status === 'success' && (
												<div className="col-12">
													<div className="alert alert-success" role="alert">
														✓ Message sent successfully! I&apos;ll get back to you soon.
													</div>
												</div>
											)}
											{status === 'error' && (
												<div className="col-12">
													<div className="alert alert-danger" role="alert">
														✗ Failed to send message. Please try again or contact me directly.
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">01401585109</h6>
								</div>
								<a href="tel:01401585109" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">mehedihasen2003@gmail.com</h6>
								</div>
								<a href="mailto:mehedihasen2003@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-skype-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Teams</span>
									<h6 className="mb-0">MehediHasan</h6>
								</div>
								<a href="skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Dhaka, Bangladesh</h6>
								</div>
								<a href="https://maps.google.com/maps?q=Dhaka,Bangladesh" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}