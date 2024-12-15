/** @format */

export default function Page() {
	return (
		<>
			<div className={`container`}>
				<h1>Privacy Policy</h1>
				<p>Effective Date: {new Date().toDateString()}</p>

				<h2>1. Introduction</h2>
				<p>
					At Xernerx Studios, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use
					our services.
				</p>

				<h2>2. Information We Collect</h2>
				<p>We may collect the following types of information:</p>
				<ul>
					<li>
						<strong>Account Information:</strong> Information you provide during account creation, such as your name, email address, and username.
					</li>
					<li>
						<strong>Usage Data:</strong> Data generated while using our services, including logs, preferences, and interactions.
					</li>
					<li>
						<strong>Third-Party Integrations:</strong> Information shared via third-party services, such as Discord, that you connect to our platform.
					</li>
				</ul>

				<h2>3. How We Use Your Information</h2>
				<p>We use your data for the following purposes:</p>
				<ul>
					<li>To provide and improve our services.</li>
					<li>To personalize your user experience.</li>
					<li>To communicate with you regarding updates, features, or customer support.</li>
					<li>To ensure compliance with our Terms of Service and legal obligations.</li>
				</ul>

				<h2>4. Sharing Your Information</h2>
				<p>We do not sell or rent your personal information. However, we may share your data with:</p>
				<ul>
					<li>
						<strong>Service Providers:</strong> Trusted third parties who assist in delivering our services, such as hosting providers.
					</li>
					<li>
						<strong>Third-Party Platforms:</strong> Integrations like Discord, when you authorize such connections.
					</li>
					<li>
						<strong>Legal Authorities:</strong> If required by law or to protect our legal rights.
					</li>
				</ul>

				<h2>5. Third-Party Services</h2>
				<p>
					Our services may integrate with third-party platforms, such as Discord. Please note that these platforms have their own Privacy Policies, and we are not responsible for their practices. We
					encourage you to review their policies before authorizing integrations.
				</p>

				<h2>6. Data Retention</h2>
				<p>
					We retain your data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Upon account deletion, some data may be retained for legal or
					compliance purposes.
				</p>

				<h2>7. Data Security</h2>
				<p>
					We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission or storage is 100% secure, and we cannot
					guarantee absolute security.
				</p>

				<h2>8. Account Termination</h2>
				<p>
					Both you and Xernerx Studios have the right to terminate your account at any time. Upon termination, your access to the services will cease, and any remaining data associated with your
					account will be handled in accordance with this Privacy Policy and applicable laws.
				</p>

				<h2>9. Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. The most current version will be posted on our website. Continued use of our services indicates your acceptance of the updated policy.
				</p>

				<h2>10. Contact Us</h2>
				<p>If you have any questions or concerns about this Privacy Policy, please contact us at legal@xernerx.xyz.</p>

				<p>Thank you for trusting Xernerx Studios with your data!</p>
			</div>
		</>
	);
}
