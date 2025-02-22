import { useConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';
import { useRouter } from 'next/router';

export default {
	logo: <Logo />,
	project: {
		link: 'https://github.com/geiger01/capturekit-docs',
	},
	docsRepositoryBase: 'https://github.com/geiger01/capturekit-docs',

	useNextSeoProps() {
		return {
			titleTemplate: 'Documentation - CaptureKit',
			openGraph: {
				title:
					'Documentation | CaptureKit - Turn any website into a screenshot with our powerful Screenshot API',
				description:
					'CaptureKit is a powerful API for capturing screenshots, extracting HTML, gathering links, and summarizing content—all with a simple request.',
				images: [
					{
						url: 'https://capturekit-assets.s3.amazonaws.com/capturekit-og+(1).png',
						width: 1200,
						height: 630,
					},
				],
			},
		};
	},
	head() {
		const config = useConfig();
		const title = config.title + ' | CaptureKit';

		const description =
			'CaptureKit is a powerful API for capturing screenshots, extracting HTML, gathering links, and summarizing content—all with a simple request.';
		const ogImage =
			'https://capturekit-assets.s3.amazonaws.com/capturekit-og+(1).png';

		return (
			<>
				<title>{title}</title>
				<meta property='og:title' content={title} />
				<meta property='description' content={description} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={ogImage} />
			</>
		);
	},
	footer: {
		text: 'CaptureKit Docs',
	},
};
