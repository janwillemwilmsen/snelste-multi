module.exports = {
	name: "Google.com", // optional, falls back to object key
	description: "Google Website",
	hide:true,
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false, // !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.google.com/services/",
		"https://www.google.com/intl/en_nl/ads/",
	
	]
};


// LINKS description:
// Google Services
// Google Advertising