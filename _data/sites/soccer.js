json = 
[
	{
	  newname:"FCB",
	  url:"https://fcbarcelona.com/",
	  slug:"/fcb"
	},	
	{
	  newname:"PSG",
	  url:"https://psg.fr/",
	  slug:"/psg"
	},
	{
		newname:"RMD",
		url:"https://www.realmadrid.com/en",
		slug:"https://google.nl"
	  }
]



module.exports = {
	name: "Soccer websites", // optional, falls back to object key
	description: "Soccer websites get tested",
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

	urls: json.map(el=>el.url),
	newnames: json.map(el=>el.newname),
	slugs: json.map(el=>el.slug)

	// urls: [
	// 	"https://www.realmadrid.com/en",
	// 	"https://www.fcbarcelona.com/",
	// 	"https://www.psg.fr/",
	
	// ]
};


// Homepage of FC RealMadrid
// Homepage of FC Barcelona
// Homepage of Paris Saint-Germain