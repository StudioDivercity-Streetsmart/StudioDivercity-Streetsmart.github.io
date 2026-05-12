import { getLocale } from './runtime.js'

const messages = {
	en: {
		site_title: "StreetSmart | Let's Reimagine Our Streets",
		site_description:
			'StreetSmart empowers everyday people to understand, reimagine, and improve their streets',
		pilot_title:
			'StreetSmart Pilot | Partnering with Cities and Organisations',
		pilot_description:
			'StreetSmart turns everyday street experience into usable insight for urban decision-making. Run a pilot in your city.',
		nav_home: 'Home',
		nav_pilots: 'Pilots',
		nav_how_it_works: 'How It Works',
		nav_how_it_works_lower: 'How it Works',
		nav_mission: 'Mission',
		nav_myth_busters: 'Myth-Busters',
		nav_team: 'Team',
		nav_contact_us: 'Contact Us',
		nav_at_a_glance: 'At a Glance',
		nav_pilot_approach: 'Pilot Approach',
		try_streetsmart: 'Try StreetSmart ➔',
		try_it_now: 'Try it now ➔',
		get_in_touch: 'Get in Touch ➔',
		get_one_pager: 'Get the One-Pager',
		more: 'More ➔',
		more_myths: 'More Myths ➔',
		hero_title_part_1: 'Does',
		hero_title_emphasis: 'your street',
		hero_title_part_2: 'work for you?',
		hero_description:
			'Discover how your street shapes your daily freedom, safety, and sense of well-being.',
		how_it_works_label: 'How It Works',
		neighbourhood_title: 'Get to know your neighbourhood',
		neighbourhood_body_1:
			'See how others experience your streets. Understand what works — and what doesn’t.',
		neighbourhood_body_2:
			'Discover simple changes that could improve comfort, safety, and everyday life.',
		insights_title: 'Get insights about any street',
		insights_body_1:
			'Upload a photo and StreetSmart gives you instant feedback. Want safer crossings? More shade?',
		insights_body_2:
			'We’ll show you what’s missing — and let you add your voice to strengthen the case for change.',
		feel_title: 'Tell us how you feel',
		feel_body:
			'Every street tells a story — not just through its design, but through how it makes you feel. Do you feel safe here? Comfortable? Able to move easily? Your answers reveal what can’t be seen on a map — the lived experience of everyday streets.',
		movement_title: 'Add your street, join the movement',
		movement_body:
			'StreetSmart turns everyday observations into public demand. Share a photo and your feedback to reveal strengths, spot gaps, and call for change.',
		vision_mission_label: 'Vision & Mission',
		vision_mission_label_caps: 'VISION & MISSION',
		our_vision_title: 'Our Vision',
		our_vision_body:
			'A world where streets are no longer dangerous spaces — but vibrant places where people and nature thrive together.',
		our_mission_title: 'Our Mission',
		our_mission_body:
			'StreetSmart empowers everyday people to see, understand and improve their streets. We turn street photos into insights, and insights into action.',
		everyday_urbanist_title_1: 'Street',
		everyday_urbanist_title_2: 'Smart is for the Everyday Urbanist',
		everyday_urbanist_parent: 'For the parent pushing a pram.',
		everyday_urbanist_teen: 'The teenager cycling to school.',
		everyday_urbanist_older: 'The older adult crossing the street.',
		everyday_urbanist_commuter: 'The commuter seeking shade and clean air.',
		everyday_urbanist_driver: 'Even the driver stuck in traffic.',
		live_streetsmart: 'Live StreetSmart.',
		why: 'Why',
		smart_question: 'Smart?',
		why_body_1:
			'StreetSmart exists to challenge a century of urban planning that prioritised speed and flow over people and the planet.',
		why_body_2:
			'This movement-first approach has led to deadly heat, flooding, pollution, road fatalities, isolation, and a loss of freedom - particularly for children. Our streets have become climate-risk zones and health hazards.',
		why_body_3: 'StreetSmart flips the script by shifting mindsets.',
		why_body_4:
			'We empower communities to see streets not just as routes for movement, but as places where children can walk safely, nature can flourish, and communities can thrive in the face of climate change.',
		why_body_5:
			'Through street-level data, community voices, and storytelling, we spark curiosity and drive meaningful change.',
		why_body_6:
			'StreetSmart is more than a platform. It is a movement for a culture that values people over cars, nature over asphalt, and belonging over congestion.',
		myth_busters_title: 'Myth-busters',
		myth_busters_intro:
			'StreetSmart debunks common myths about urban transit, mobility and cities.',
		image_credits_amsterdam:
			'image credits: https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/',
		image_credits_bogota:
			'image credits: https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/',
		image_credits_bridge:
			'image credits: https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/',
		image_credits_pickup:
			'image credits: https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/',
		myth_1_label_hash: 'MYTH #1',
		myth_2_label_hash: 'MYTH #2',
		myth_3_label_hash: 'MYTH #3',
		myth_4_label_hash: 'MYTH #4',
		myth_1_label: 'MYTH 1',
		myth_2_label: 'MYTH 2',
		myth_3_label: 'MYTH 3',
		myth_4_label: 'MYTH 4',
		truth_caps: 'TRUTH',
		truth: 'Truth',
		proof: 'Proof',
		sources: 'Sources',
		streetsmart: 'StreetSmart',
		myth_1_quote:
			'“We are not Amsterdam. Our city doesn’t have a walking/ cycling culture.”',
		myth_1_truth_card_1:
			'People always respond to the environments we create. Infrastructure shapes behaviour.',
		myth_1_truth_card_2:
			'When infrastructure prioritises people, behaviours shift.',
		myth_1_truth_full:
			'People always respond to the environments we create. Infrastructure shapes behaviour. When infrastructure prioritises people, behaviours shift.',
		myth_1_walter_quote:
			'"If you design for cars and traffic, you get cars and traffic. If you design for people and places, you get people and places." - Walter Kulash',
		myth_1_amsterdam:
			'Amsterdam wasn’t born cycling. It was built for it. In the 1970s, it was choked with cars. The city transformed its streets, and people changed how they moved.',
		myth_1_proof:
			'In Bogotá, cycling rates increased by 50% between 2000 and 2015 after the city expanded its network of protected bike lanes, especially along major corridors. This infrastructure shift led to a significant reduction in traffic congestion and improvements in public health. Bogotá’s cycling boom demonstrates that when cities invest in safe, accessible infrastructure, people choose sustainable modes of transport',
		myth_1_streetsmart:
			'StreetSmart helps cities identify where demand already exists but is suppressed by poor design, unlocking rapid shifts with small, targeted improvements.',
		source_cover_amsterdam:
			'Cover image: https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/',
		source_bogota_reports:
			'Bogotá’s Mobility Department, ITDP Latin America Reports, El Tiempo',
		myth_2_quote:
			'"Adding more road lanes will ease congestion and improve traffic flow."',
		myth_2_truth:
			'Building more road space doesn’t solve congestion – it actually creates more. This is known as induced demand: adding more lanes attracts more drivers, quickly filling up the new capacity.',
		myth_2_proof:
			'A 2011 study by economists Matthew Turner and Gilles Duranton (The Fundamental Law of Road Congestion) found that vehicle kilometres travelled increase proportionally to road expansion – meaning new lanes fill up almost immediately.',
		myth_2_example:
			'Example: Houston’s Katy Freeway – expanded to 23 lanes – became even more congested than before, with commute times increasing by up to 30% within a few years after the expansion',
		myth_2_streetsmart:
			'Instead of chasing a losing battle by widening roads, StreetSmart empowers cities to reclaim space for people by identifying where a rethink is needed and showing what’s possible beyond endless road expansion.',
		source_cover_bogota:
			'Cover image: https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/',
		source_houston: 'Houston Chronicle, 2014',
		myth_3_quote: '"Pedestrian bridges are designed for pedestrians."',
		myth_3_truth_card:
			'Pedestrian bridges are often designed with cars in mind, prioritising vehicle flow over pedestrian convenience. They force people to take detours or climb stairs, making them inefficient and inaccessible.',
		myth_3_truth:
			'Pedestrian bridges are often designed with cars in mind, prioritising vehicle flow over pedestrian convenience. They force people to take detours or climb stairs, making them inefficient and inaccessible, especially for children, caregivers, the elderly, and those with disabilities. At-grade crossings are the true pedestrian-friendly solution.',
		myth_3_proof:
			'Cities like Paris and Bogotá have shifted towards at-grade crossings to improve accessibility and streamline pedestrian movement. Studies show that pedestrian bridges often result in lower usage due to the inconvenience they create',
		myth_3_streetsmart:
			'StreetSmart advocates for at-grade crossings, guiding cities towards safer, more accessible solutions for all users.',
		source_cover_bridge:
			'Cover image:https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/',
		source_paris_reports: 'Paris Transport Policy Reports',
		source_bogota_studies: 'Bogotá Urban Mobility Studies',
		myth_4_quote: '"Bigger cars are safer."',
		myth_4_truth_card:
			'Big cars make the streets more dangerous for everyone outside the vehicle. Larger vehicles, like SUVs and trucks, increase the risk of fatal collisions with pedestrians and cyclists. They take much longer to stop and, due to their height, drivers can’t see pedestrians.',
		myth_4_truth:
			'Big cars make the streets more dangerous for everyone outside the vehicle. Larger vehicles, like SUVs and trucks, increase the risk of fatal collisions with pedestrians and cyclists. They take much longer to stop and, due to their height, drivers can’t see pedestrians, especially children, even just a few feet in front of the car. Moreover, the higher bonnet of large vehicles means pedestrians are more likely to suffer life-threatening brain injuries when struck, rather than less severe leg injuries typical of smaller vehicles.',
		myth_4_proof:
			'Studies show that pedestrians hit by larger vehicles are significantly more likely to be killed. SUVs and pickups are 2-3 times more likely to fatally injure pedestrians than smaller cars. The higher driving position means poor visibility, particularly for children, while the raised bonnet height leads to more severe head injuries when pedestrians are hit, often causing fatal brain trauma.',
		myth_4_streetsmart:
			'StreetSmart envisions streets designed for people, not oversized vehicles. We advocate for reclaiming space, reducing danger, and creating safer, more liveable urban environments.',
		source_cover_pickup:
			'Cover image:https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/',
		source_iihs: 'IIHS',
		source_jama: 'JAMA Surgery Study',
		source_nhtsa: 'NHTSA',
		team_title: 'Meet the people behind StreetSmart',
		founder_title: 'Founder & Urban Innovation Lead',
		reena_bio_prefix:
			'Reena Mahajan is an architect, urban planner, and the founder of',
		studio_divercity: 'Studio DiverCity',
		reena_bio_suffix:
			'. She brings nearly two decades of international experience designing people-centred, nature-positive cities — blending water-sensitive design, sustainable mobility, and gender-responsive planning into bold, holistic solutions.',
		reena_story:
			'StreetSmart was born from lived experience. While raising a child in Montevideo, Reena saw how car-dominated streets restrict freedom, safety, and everyday life — especially for children. In response, she led the #MontevideoPacificada campaign, using visual advocacy, public dialogue, and design to push for change. The result: safer crossings, new bike lanes, and a cultural shift around mobility.',
		reena_now:
			'Now based in Paris, she’s building StreetSmart to scale that impact — combining data, design, and public engagement to help cities put people and the planet first.',
		launch_team: 'Launch Team',
		launch_team_body_1:
			'StreetSmart’s launch team came together through the Climatebase Fellowship and beyond — a multidisciplinary group united by the belief that streets should support freedom, health, and climate resilience.',
		launch_team_body_2:
			'With experience spanning urban planning, technology, design, and advocacy, the team collaborates across disciplines to build a tool that empowers people, informs decision-makers, and reimagines what streets can be.',
		core_contributors: 'Core Contributors',
		contributors_supporters: 'Contributors & supporters',
		early_contributors: 'Early contributors',
		early_contributors_names:
			'Anders Ward Danbi Kim Divya Bisht Elzaphan Murage Icare Duplessey Jayabalambika R Sirid Kellermann Scott Baker',
		role_design_lead: 'Design Lead',
		role_backend_developer: 'Backend Developer',
		role_urban_systems_strategist: 'Urban Systems Strategist',
		role_brand_identity_designer: 'Brand Identity Designer',
		role_urban_researcher: 'Urban Researcher',
		role_tech_operations_lead: 'Tech & Operations Lead',
		role_frontend_engineer: 'Frontend Engineer',
		role_ai_geospatial_engineer: 'AI & Geospatial Engineer',
		role_urban_designer: 'Urban Designer',
		role_advisor: 'Advisor',
		role_gis_researcher: 'GIS Researcher',
		role_product_manager: 'Product Manager',
		role_fullstack_ai_engineer: 'Fullstack AI Engineer',
		role_software_developer: 'Software Developer',
		role_community_researcher: 'Community Researcher',
		role_ai_ml_developer: 'AI/ML Developer',
		try_now_title: 'Try StreetSmart Now',
		try_now_body:
			'StreetSmart is free-to-use and fully in-browser, no download necessary!',
		email: 'beta@livestreetsmart.com',
		disclaimer_label: 'Disclaimer:',
		disclaimer_body_1: 'StreetSmart is currently under development. Please',
		contact_us_lower: 'contact us',
		disclaimer_body_2:
			'if you experience any issues or anything you need to report.',
		pilot_label: 'StreetSmart Pilot',
		pilot_hero_title: 'Run a pilot in your city',
		pilot_hero_body:
			'Understand how streets perform in everyday use, and turn that into better decisions.',
		pilot_intro_1:
			'Cities need to adapt streets to heat, flooding and everyday safety, yet decisions are still shaped by data that often misses how streets are actually experienced.',
		pilot_intro_2:
			'StreetSmart combines street-level observation, participant input and AI-assisted image analysis. It reveals conditions such as comfort, safety, shade, greenery and movement — generating clear, usable evidence to guide street design and climate adaptation.',
		pilot_intro_3:
			'Designed for cities, organisations and public agencies working on street transformations.',
		pilot_glance_label: 'StreetSmart at a Glance',
		pilot_how_it_works: 'How it works',
		pilot_analyse: 'Analyse',
		pilot_analyse_body:
			'AI-assisted analysis of street photos to assess liveability conditions',
		pilot_express: 'Express',
		pilot_express_body:
			'People describe how it feels to use the street — cross, wait, rest, move',
		pilot_inform: 'Inform',
		pilot_inform_body:
			'Clear visual evidence to support design, prioritisation and dialogue',
		pilot_approach_label: 'Pilot Approach',
		pilot_approach_title:
			'Facilitated street audit combining a walkshop and a digital tool',
		pilot_approach_body:
			'A structured, adaptable process that works with your local context and objectives.',
		pilot_snap: 'Snap',
		pilot_snap_body: 'Photograph selected street segments',
		pilot_reflect: 'Reflect',
		pilot_reflect_body: 'Short prompts capture lived experience',
		pilot_assess: 'Assess',
		pilot_assess_body:
			'Analysis of pavements, crossings, shade, greenery, traffic conditions',
		pilot_input: 'Input',
		pilot_input_body: 'Participants validate and enrich observations',
		pilot_debrief: 'Debrief',
		pilot_debrief_body: 'Collective discussion to identify priorities',
		pilot_value_title: 'Value for your city or organisation',
		pilot_enables_title: 'What It Enables',
		pilot_enable_rapid: 'Rapid diagnosis of street conditions',
		pilot_enable_priority: 'Identification of priority areas',
		pilot_enable_shared:
			'Shared understanding between communities and decision-makers',
		pilot_enable_earlier: 'Earlier input into planning decisions',
		pilot_outputs_title: 'Outputs',
		pilot_output_summary:
			'Pilot summary with key insights and visual mapping',
		pilot_output_quick_wins: 'Priority areas and quick-win recommendations',
		pilot_output_evidence: 'Evidence base for local authorities',
		pilot_output_scaling: 'Framework for scaling',
		pilot_early_label: 'Early Pilot Experience',
		pilot_delhi_title: 'Tested on the ground in Delhi',
		pilot_delhi_body_1:
			'StreetSmart has already been tested through an initial pilot in Delhi, demonstrating how it works in real conditions and refining the approach and interface ahead of broader collaborations.',
		pilot_delhi_body_2:
			'The pilot combined on-site observation, participant input and analysis to identify priority issues and areas for improvement.',
		pilot_implementation: 'Implementation',
		pilot_implementation_1:
			'Delivered through a guided process combining the platform, a walkshop and facilitation.',
		pilot_implementation_2:
			'The methodology and interface are adapted to the context and objectives of each project.',
		pilot_beta_note:
			'We are currently in private beta. Pilot collaborations and partnerships available.',
		pilot_founder_bio:
			'Urban planner and architect with over 20 years of international experience across Europe, Latin America, Africa and South Asia. She leads urban development and regeneration projects while working at the intersection of design, policy and public engagement to reframe how cities define priorities.',
		pilot_team_blurb:
			'StreetSmart is built by a multidisciplinary team spanning urban planning, technology, design, and advocacy — united by the belief that streets should support freedom, health, and climate resilience.',
		pilot_full_team: 'Meet the full team',
		pilot_cta_title: 'Interested in running a pilot in your city?',
		pilot_cta_body:
			'Get in touch to explore how StreetSmart can support street-level insight and climate adaptation in your context.',
		alt_streetsmart_app: 'StreetSmart app on mobile devices',
		alt_street_analysis: 'Street analysis screenshot',
		alt_user_feedback: 'User feedback screenshot',
		alt_neighbourhood_insights: 'Neighbourhood insights screenshot',
		lang_selector: 'Language selector',
		lang_english: 'English',
		lang_french: 'Français',
	},
	fr: {
		site_title: 'StreetSmart | Réinventons nos rues',
		site_description:
			'StreetSmart donne à chacun les moyens de comprendre, réimaginer et améliorer ses rues',
		pilot_title:
			'Pilote StreetSmart | Collaborer avec les villes et les organisations',
		pilot_description:
			'StreetSmart transforme l’expérience quotidienne de la rue en enseignements utiles pour les décisions urbaines. Lancez un pilote dans votre ville.',
		nav_home: 'Accueil',
		nav_pilots: 'Pilotes',
		nav_how_it_works: 'Fonctionnement',
		nav_how_it_works_lower: 'Fonctionnement',
		nav_mission: 'Mission',
		nav_myth_busters: 'Idées reçues',
		nav_team: 'Équipe',
		nav_contact_us: 'Nous contacter',
		nav_at_a_glance: 'En bref',
		nav_pilot_approach: 'Approche pilote',
		try_streetsmart: 'Essayer StreetSmart ➔',
		try_it_now: 'Essayez maintenant ➔',
		get_in_touch: 'Nous contacter ➔',
		get_one_pager: 'Obtenir la fiche synthèse',
		more: 'Plus ➔',
		more_myths: 'Plus d’idées reçues ➔',
		hero_title_part_1: 'Est-ce que',
		hero_title_emphasis: 'votre rue',
		hero_title_part_2: 'fonctionne pour vous ?',
		hero_description:
			'Découvrez comment votre rue façonne votre liberté quotidienne, votre sécurité et votre bien-être.',
		how_it_works_label: 'Fonctionnement',
		neighbourhood_title: 'Apprenez à connaître votre quartier',
		neighbourhood_body_1:
			'Voyez comment les autres vivent vos rues. Comprenez ce qui fonctionne, et ce qui ne fonctionne pas.',
		neighbourhood_body_2:
			'Découvrez des changements simples qui peuvent améliorer le confort, la sécurité et la vie quotidienne.',
		insights_title: 'Obtenez des informations sur n’importe quelle rue',
		insights_body_1:
			'Téléversez une photo et StreetSmart vous donne un retour immédiat. Vous voulez des traversées plus sûres ? Plus d’ombre ?',
		insights_body_2:
			'Nous vous montrons ce qui manque, et vous permettons d’ajouter votre voix pour renforcer l’appel au changement.',
		feel_title: 'Dites-nous ce que vous ressentez',
		feel_body:
			'Chaque rue raconte une histoire, non seulement par sa conception, mais aussi par ce qu’elle vous fait ressentir. Vous y sentez-vous en sécurité ? À l’aise ? Pouvez-vous vous déplacer facilement ? Vos réponses révèlent ce qu’une carte ne montre pas : l’expérience vécue des rues du quotidien.',
		movement_title: 'Ajoutez votre rue, rejoignez le mouvement',
		movement_body:
			'StreetSmart transforme les observations du quotidien en demande publique. Partagez une photo et votre avis pour révéler les points forts, repérer les manques et demander le changement.',
		vision_mission_label: 'Vision et mission',
		vision_mission_label_caps: 'VISION ET MISSION',
		our_vision_title: 'Notre vision',
		our_vision_body:
			'Un monde où les rues ne sont plus des espaces dangereux, mais des lieux vivants où les personnes et la nature s’épanouissent ensemble.',
		our_mission_title: 'Notre mission',
		our_mission_body:
			'StreetSmart donne à chacun les moyens de voir, comprendre et améliorer ses rues. Nous transformons les photos de rue en enseignements, puis ces enseignements en actions.',
		everyday_urbanist_title_1: 'Street',
		everyday_urbanist_title_2:
			'Smart s’adresse aux urbanistes du quotidien',
		everyday_urbanist_parent: 'Pour le parent qui pousse une poussette.',
		everyday_urbanist_teen: 'L’adolescent qui va à l’école à vélo.',
		everyday_urbanist_older: 'La personne âgée qui traverse la rue.',
		everyday_urbanist_commuter:
			'La personne qui cherche de l’ombre et un air plus sain pendant ses trajets.',
		everyday_urbanist_driver:
			'Même l’automobiliste bloqué dans les embouteillages.',
		live_streetsmart: 'Vivez StreetSmart.',
		why: 'Pourquoi',
		smart_question: 'Smart ?',
		why_body_1:
			'StreetSmart existe pour remettre en question un siècle d’urbanisme qui a privilégié la vitesse et les flux au détriment des personnes et de la planète.',
		why_body_2:
			'Cette approche centrée sur les déplacements a entraîné chaleur mortelle, inondations, pollution, accidents mortels, isolement et perte de liberté, en particulier pour les enfants. Nos rues sont devenues des zones de risque climatique et des menaces pour la santé.',
		why_body_3:
			'StreetSmart change la donne en faisant évoluer les mentalités.',
		why_body_4:
			'Nous aidons les communautés à voir les rues non comme de simples axes de déplacement, mais comme des lieux où les enfants peuvent marcher en sécurité, où la nature peut s’épanouir et où les communautés peuvent prospérer face au changement climatique.',
		why_body_5:
			'Grâce aux données de terrain, aux voix des communautés et au récit, nous suscitons la curiosité et favorisons des changements concrets.',
		why_body_6:
			'StreetSmart est plus qu’une plateforme. C’est un mouvement pour une culture qui valorise les personnes plutôt que les voitures, la nature plutôt que l’asphalte, et le lien plutôt que la congestion.',
		myth_busters_title: 'Idées reçues',
		myth_busters_intro:
			'StreetSmart démonte les idées reçues courantes sur les transports urbains, la mobilité et les villes.',
		image_credits_amsterdam:
			'crédits image : https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/',
		image_credits_bogota:
			'crédits image : https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/',
		image_credits_bridge:
			'crédits image : https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/',
		image_credits_pickup:
			'crédits image : https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/',
		myth_1_label_hash: 'IDÉE REÇUE N° 1',
		myth_2_label_hash: 'IDÉE REÇUE N° 2',
		myth_3_label_hash: 'IDÉE REÇUE N° 3',
		myth_4_label_hash: 'IDÉE REÇUE N° 4',
		myth_1_label: 'IDÉE REÇUE N° 1',
		myth_2_label: 'IDÉE REÇUE N° 2',
		myth_3_label: 'IDÉE REÇUE N° 3',
		myth_4_label: 'IDÉE REÇUE N° 4',
		truth_caps: 'VÉRITÉ',
		truth: 'Vérité',
		proof: 'Preuves',
		sources: 'Sources',
		streetsmart: 'StreetSmart',
		myth_1_quote:
			'« Nous ne sommes pas Amsterdam. Notre ville n’a pas de culture de la marche ou du vélo. »',
		myth_1_truth_card_1:
			'Les gens répondent toujours aux environnements que nous créons. Les infrastructures façonnent les comportements.',
		myth_1_truth_card_2:
			'Lorsque les infrastructures donnent la priorité aux personnes, les comportements évoluent.',
		myth_1_truth_full:
			'Les gens répondent toujours aux environnements que nous créons. Les infrastructures façonnent les comportements. Lorsque les infrastructures donnent la priorité aux personnes, les comportements évoluent.',
		myth_1_walter_quote:
			'« Si vous concevez pour les voitures et la circulation, vous obtenez des voitures et de la circulation. Si vous concevez pour les personnes et les lieux, vous obtenez des personnes et des lieux. » - Walter Kulash',
		myth_1_amsterdam:
			'Amsterdam n’est pas née cyclable. Elle l’est devenue. Dans les années 1970, elle était étouffée par les voitures. La ville a transformé ses rues, et les habitants ont changé leur façon de se déplacer.',
		myth_1_proof:
			'À Bogotá, la pratique du vélo a augmenté de 50 % entre 2000 et 2015 après l’extension du réseau de pistes cyclables protégées, notamment le long des grands axes. Ce changement d’infrastructure a réduit sensiblement la congestion et amélioré la santé publique. L’essor du vélo à Bogotá montre que lorsque les villes investissent dans des infrastructures sûres et accessibles, les habitants choisissent des modes de transport durables',
		myth_1_streetsmart:
			'StreetSmart aide les villes à repérer où la demande existe déjà mais reste freinée par une mauvaise conception, afin de déclencher des changements rapides grâce à de petites améliorations ciblées.',
		source_cover_amsterdam:
			'Image de couverture : https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/',
		source_bogota_reports:
			'Département de la mobilité de Bogotá, rapports ITDP Amérique latine, El Tiempo',
		myth_2_quote:
			'« Ajouter des voies de circulation réduira les embouteillages et améliorera le trafic. »',
		myth_2_truth:
			'Construire davantage d’espace routier ne résout pas la congestion : cela en crée davantage. C’est ce qu’on appelle la demande induite : ajouter des voies attire plus de conducteurs, qui remplissent rapidement la nouvelle capacité.',
		myth_2_proof:
			'Une étude de 2011 des économistes Matthew Turner et Gilles Duranton (The Fundamental Law of Road Congestion) a montré que les kilomètres parcourus en voiture augmentent proportionnellement à l’extension des routes, ce qui signifie que les nouvelles voies se remplissent presque immédiatement.',
		myth_2_example:
			'Exemple : la Katy Freeway à Houston, élargie à 23 voies, est devenue encore plus congestionnée qu’auparavant, avec des temps de trajet augmentant jusqu’à 30 % quelques années après les travaux',
		myth_2_streetsmart:
			'Au lieu de mener une bataille perdue en élargissant les routes, StreetSmart aide les villes à récupérer de l’espace pour les personnes en identifiant où une nouvelle approche est nécessaire et en montrant ce qui est possible au-delà de l’expansion routière sans fin.',
		source_cover_bogota:
			'Image de couverture : https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/',
		source_houston: 'Houston Chronicle, 2014',
		myth_3_quote:
			'« Les passerelles piétonnes sont conçues pour les piétons. »',
		myth_3_truth_card:
			'Les passerelles piétonnes sont souvent conçues en pensant aux voitures, en privilégiant le flux automobile plutôt que la facilité des piétons. Elles obligent les personnes à faire des détours ou à monter des escaliers, ce qui les rend inefficaces et inaccessibles.',
		myth_3_truth:
			'Les passerelles piétonnes sont souvent conçues en pensant aux voitures, en privilégiant le flux automobile plutôt que la facilité des piétons. Elles obligent les personnes à faire des détours ou à monter des escaliers, ce qui les rend inefficaces et inaccessibles, surtout pour les enfants, les aidants, les personnes âgées et les personnes handicapées. Les traversées de plain-pied sont la véritable solution favorable aux piétons.',
		myth_3_proof:
			'Des villes comme Paris et Bogotá se sont orientées vers des traversées de plain-pied afin d’améliorer l’accessibilité et de fluidifier les déplacements piétons. Les études montrent que les passerelles piétonnes sont souvent moins utilisées en raison des contraintes qu’elles créent',
		myth_3_streetsmart:
			'StreetSmart défend les traversées de plain-pied et aide les villes à choisir des solutions plus sûres et plus accessibles pour tous les usagers.',
		source_cover_bridge:
			'Image de couverture : https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/',
		source_paris_reports: 'Rapports sur la politique de transport de Paris',
		source_bogota_studies: 'Études de mobilité urbaine de Bogotá',
		myth_4_quote: '« Les grosses voitures sont plus sûres. »',
		myth_4_truth_card:
			'Les grosses voitures rendent les rues plus dangereuses pour toutes les personnes à l’extérieur du véhicule. Les véhicules plus grands, comme les SUV et les pick-up, augmentent le risque de collisions mortelles avec les piétons et les cyclistes. Ils mettent beaucoup plus de temps à s’arrêter et, en raison de leur hauteur, les conducteurs voient moins bien les piétons.',
		myth_4_truth:
			'Les grosses voitures rendent les rues plus dangereuses pour toutes les personnes à l’extérieur du véhicule. Les véhicules plus grands, comme les SUV et les pick-up, augmentent le risque de collisions mortelles avec les piétons et les cyclistes. Ils mettent beaucoup plus de temps à s’arrêter et, en raison de leur hauteur, les conducteurs ne voient pas les piétons, surtout les enfants, même à quelques pieds devant le véhicule. De plus, le capot plus haut des gros véhicules signifie que les piétons risquent davantage de subir des lésions cérébrales potentiellement mortelles, plutôt que des blessures aux jambes généralement moins graves avec des véhicules plus petits.',
		myth_4_proof:
			'Les études montrent que les piétons heurtés par des véhicules plus grands ont beaucoup plus de risques d’être tués. Les SUV et les pick-up sont deux à trois fois plus susceptibles de tuer des piétons que les petites voitures. La position de conduite plus haute réduit la visibilité, en particulier pour les enfants, tandis que la hauteur du capot entraîne des blessures à la tête plus graves lors d’un impact, souvent à l’origine de traumatismes cérébraux mortels.',
		myth_4_streetsmart:
			'StreetSmart imagine des rues conçues pour les personnes, et non pour les véhicules surdimensionnés. Nous défendons la reconquête de l’espace, la réduction du danger et la création d’environnements urbains plus sûrs et plus agréables à vivre.',
		source_cover_pickup:
			'Image de couverture : https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/',
		source_iihs: 'IIHS',
		source_jama: 'Étude JAMA Surgery',
		source_nhtsa: 'NHTSA',
		team_title: 'Découvrez l’équipe derrière StreetSmart',
		founder_title: 'Fondatrice et responsable innovation urbaine',
		reena_bio_prefix:
			'Reena Mahajan est architecte, urbaniste et fondatrice de',
		studio_divercity: 'Studio DiverCity',
		reena_bio_suffix:
			'. Elle apporte près de vingt ans d’expérience internationale dans la conception de villes centrées sur les personnes et favorables à la nature, en combinant gestion sensible de l’eau, mobilité durable et planification sensible au genre dans des solutions ambitieuses et globales.',
		reena_story:
			'StreetSmart est né d’une expérience vécue. En élevant un enfant à Montevideo, Reena a constaté à quel point les rues dominées par la voiture limitent la liberté, la sécurité et la vie quotidienne, surtout pour les enfants. En réponse, elle a mené la campagne #MontevideoPacificada, utilisant le plaidoyer visuel, le dialogue public et le design pour faire avancer le changement. Résultat : des traversées plus sûres, de nouvelles pistes cyclables et un changement culturel autour de la mobilité.',
		reena_now:
			'Aujourd’hui basée à Paris, elle développe StreetSmart pour amplifier cet impact, en combinant données, design et participation publique afin d’aider les villes à placer les personnes et la planète au premier plan.',
		launch_team: 'Équipe de lancement',
		launch_team_body_1:
			'L’équipe de lancement de StreetSmart s’est formée grâce à la Climatebase Fellowship et au-delà : un groupe pluridisciplinaire uni par la conviction que les rues doivent soutenir la liberté, la santé et la résilience climatique.',
		launch_team_body_2:
			'Avec une expérience couvrant l’urbanisme, la technologie, le design et le plaidoyer, l’équipe collabore entre disciplines pour créer un outil qui donne du pouvoir aux habitants, informe les décideurs et réimagine ce que les rues peuvent être.',
		core_contributors: 'Contributeurs principaux',
		contributors_supporters: 'Contributeurs et soutiens',
		early_contributors: 'Premiers contributeurs',
		early_contributors_names:
			'Anders Ward Danbi Kim Divya Bisht Elzaphan Murage Icare Duplessey Jayabalambika R Sirid Kellermann Scott Baker',
		role_design_lead: 'Responsable design',
		role_backend_developer: 'Développeur backend',
		role_urban_systems_strategist: 'Stratège des systèmes urbains',
		role_brand_identity_designer: 'Designer d’identité de marque',
		role_urban_researcher: 'Chercheur urbain',
		role_tech_operations_lead: 'Responsable technologie et opérations',
		role_frontend_engineer: 'Ingénieur frontend',
		role_ai_geospatial_engineer: 'Ingénieur IA et géospatial',
		role_urban_designer: 'Designer urbain',
		role_advisor: 'Conseiller',
		role_gis_researcher: 'Chercheur SIG',
		role_product_manager: 'Chef de produit',
		role_fullstack_ai_engineer: 'Ingénieur IA fullstack',
		role_software_developer: 'Développeur logiciel',
		role_community_researcher: 'Chercheur communautaire',
		role_ai_ml_developer: 'Développeur IA/ML',
		try_now_title: 'Essayez StreetSmart maintenant',
		try_now_body:
			'StreetSmart est gratuit et fonctionne entièrement dans le navigateur, sans téléchargement.',
		email: 'beta@livestreetsmart.com',
		disclaimer_label: 'Avertissement :',
		disclaimer_body_1:
			'StreetSmart est actuellement en développement. Veuillez',
		contact_us_lower: 'nous contacter',
		disclaimer_body_2:
			'si vous rencontrez un problème ou avez quelque chose à signaler.',
		pilot_label: 'Pilote StreetSmart',
		pilot_hero_title: 'Lancez un pilote dans votre ville',
		pilot_hero_body:
			'Comprenez comment les rues fonctionnent dans l’usage quotidien et transformez ces constats en meilleures décisions.',
		pilot_intro_1:
			'Les villes doivent adapter leurs rues à la chaleur, aux inondations et à la sécurité quotidienne, mais les décisions restent souvent guidées par des données qui ne saisissent pas l’expérience réelle des rues.',
		pilot_intro_2:
			'StreetSmart combine l’observation de terrain, les contributions des participants et l’analyse d’image assistée par IA. Il révèle des conditions telles que le confort, la sécurité, l’ombre, la végétation et les déplacements, en produisant des preuves claires et utilisables pour guider la conception des rues et l’adaptation climatique.',
		pilot_intro_3:
			'Conçu pour les villes, les organisations et les agences publiques qui travaillent à la transformation des rues.',
		pilot_glance_label: 'StreetSmart en bref',
		pilot_how_it_works: 'Comment ça fonctionne',
		pilot_analyse: 'Analyser',
		pilot_analyse_body:
			'Analyse assistée par IA des photos de rue pour évaluer les conditions de qualité de vie',
		pilot_express: 'Exprimer',
		pilot_express_body:
			'Les personnes décrivent ce que l’usage de la rue leur fait ressentir : traverser, attendre, se reposer, se déplacer',
		pilot_inform: 'Informer',
		pilot_inform_body:
			'Des preuves visuelles claires pour soutenir la conception, la priorisation et le dialogue',
		pilot_approach_label: 'Approche pilote',
		pilot_approach_title:
			'Audit de rue facilité combinant marche-atelier et outil numérique',
		pilot_approach_body:
			'Un processus structuré et adaptable qui s’aligne sur votre contexte local et vos objectifs.',
		pilot_snap: 'Photographier',
		pilot_snap_body: 'Photographier des segments de rue sélectionnés',
		pilot_reflect: 'Réfléchir',
		pilot_reflect_body:
			'Des questions courtes recueillent l’expérience vécue',
		pilot_assess: 'Évaluer',
		pilot_assess_body:
			'Analyse des trottoirs, traversées, ombre, végétation et conditions de circulation',
		pilot_input: 'Contribuer',
		pilot_input_body:
			'Les participants valident et enrichissent les observations',
		pilot_debrief: 'Débriefer',
		pilot_debrief_body:
			'Discussion collective pour identifier les priorités',
		pilot_value_title: 'Valeur pour votre ville ou organisation',
		pilot_enables_title: 'Ce que cela permet',
		pilot_enable_rapid: 'Diagnostic rapide des conditions de rue',
		pilot_enable_priority: 'Identification des zones prioritaires',
		pilot_enable_shared:
			'Compréhension partagée entre communautés et décideurs',
		pilot_enable_earlier:
			'Contribution plus précoce aux décisions de planification',
		pilot_outputs_title: 'Livrables',
		pilot_output_summary:
			'Synthèse du pilote avec enseignements clés et cartographie visuelle',
		pilot_output_quick_wins:
			'Zones prioritaires et recommandations à gain rapide',
		pilot_output_evidence: 'Base de preuves pour les autorités locales',
		pilot_output_scaling: 'Cadre de passage à l’échelle',
		pilot_early_label: 'Première expérience pilote',
		pilot_delhi_title: 'Testé sur le terrain à Delhi',
		pilot_delhi_body_1:
			'StreetSmart a déjà été testé lors d’un premier pilote à Delhi, démontrant son fonctionnement en conditions réelles et affinant l’approche et l’interface avant des collaborations plus larges.',
		pilot_delhi_body_2:
			'Le pilote a combiné observation sur site, contributions des participants et analyse afin d’identifier les enjeux prioritaires et les pistes d’amélioration.',
		pilot_implementation: 'Mise en œuvre',
		pilot_implementation_1:
			'Déployé via un processus guidé combinant la plateforme, une marche-atelier et une facilitation.',
		pilot_implementation_2:
			'La méthodologie et l’interface sont adaptées au contexte et aux objectifs de chaque projet.',
		pilot_beta_note:
			'Nous sommes actuellement en bêta privée. Des collaborations pilotes et partenariats sont disponibles.',
		pilot_founder_bio:
			'Urbaniste et architecte avec plus de 20 ans d’expérience internationale en Europe, en Amérique latine, en Afrique et en Asie du Sud. Elle dirige des projets de développement et de régénération urbaine tout en travaillant à l’intersection du design, des politiques publiques et de l’engagement citoyen pour redéfinir la manière dont les villes établissent leurs priorités.',
		pilot_team_blurb:
			'StreetSmart est conçu par une équipe pluridisciplinaire couvrant l’urbanisme, la technologie, le design et le plaidoyer, unie par la conviction que les rues doivent soutenir la liberté, la santé et la résilience climatique.',
		pilot_full_team: 'Découvrir toute l’équipe',
		pilot_cta_title: 'Envie de lancer un pilote dans votre ville ?',
		pilot_cta_body:
			'Contactez-nous pour découvrir comment StreetSmart peut soutenir l’analyse de terrain et l’adaptation climatique dans votre contexte.',
		alt_streetsmart_app: 'Application StreetSmart sur appareils mobiles',
		alt_street_analysis: 'Capture d’écran d’analyse de rue',
		alt_user_feedback: 'Capture d’écran des retours utilisateur',
		alt_neighbourhood_insights:
			'Capture d’écran des enseignements de quartier',
		lang_selector: 'Sélecteur de langue',
		lang_english: 'Anglais',
		lang_french: 'Français',
	},
}

export const sourceTextKeys = {
	"StreetSmart | Let's Reimagine Our Streets": 'site_title',
	'StreetSmart empowers everyday people to understand, reimagine, and improve their streets':
		'site_description',
	'StreetSmart Pilot | Partnering with Cities and Organisations':
		'pilot_title',
	'StreetSmart turns everyday street experience into usable insight for urban decision-making. Run a pilot in your city.':
		'pilot_description',
	'Home': 'nav_home',
	'Pilots': 'nav_pilots',
	'How It Works': 'how_it_works_label',
	'How it Works': 'nav_how_it_works_lower',
	'Mission': 'nav_mission',
	'Myth-Busters': 'nav_myth_busters',
	'Team': 'nav_team',
	'Contact Us': 'nav_contact_us',
	'At a Glance': 'nav_at_a_glance',
	'Pilot Approach': 'pilot_approach_label',
	'Try StreetSmart ➔': 'try_streetsmart',
	'Try it now ➔': 'try_it_now',
	'Get in Touch ➔': 'get_in_touch',
	'Get the One-Pager': 'get_one_pager',
	'More ➔': 'more',
	'More Myths ➔': 'more_myths',
	'Does': 'hero_title_part_1',
	'your street': 'hero_title_emphasis',
	'work for you?': 'hero_title_part_2',
	'Discover how your street shapes your daily freedom, safety, and sense of well-being.':
		'hero_description',
	'Get to know your neighbourhood': 'neighbourhood_title',
	'See how others experience your streets. Understand what works — and what doesn’t.':
		'neighbourhood_body_1',
	'Discover simple changes that could improve comfort, safety, and everyday life.':
		'neighbourhood_body_2',
	'Get insights about any street': 'insights_title',
	'Upload a photo and StreetSmart gives you instant feedback. Want safer crossings? More shade?':
		'insights_body_1',
	'We’ll show you what’s missing — and let you add your voice to strengthen the case for change.':
		'insights_body_2',
	'Tell us how you feel': 'feel_title',
	'Every street tells a story — not just through its design, but through how it makes you feel. Do you feel safe here? Comfortable? Able to move easily? Your answers reveal what can’t be seen on a map — the lived experience of everyday streets.':
		'feel_body',
	'Add your street, join the movement': 'movement_title',
	'StreetSmart turns everyday observations into public demand. Share a photo and your feedback to reveal strengths, spot gaps, and call for change.':
		'movement_body',
	'Vision & Mission': 'vision_mission_label',
	'VISION & MISSION': 'vision_mission_label_caps',
	'Our Vision': 'our_vision_title',
	'A world where streets are no longer dangerous spaces — but vibrant places where people and nature thrive together.':
		'our_vision_body',
	'Our Mission': 'our_mission_title',
	'StreetSmart empowers everyday people to see, understand and improve their streets. We turn street photos into insights, and insights into action.':
		'our_mission_body',
	'Street': 'everyday_urbanist_title_1',
	'Smart is for the Everyday Urbanist': 'everyday_urbanist_title_2',
	'For the parent pushing a pram.': 'everyday_urbanist_parent',
	'The teenager cycling to school.': 'everyday_urbanist_teen',
	'The older adult crossing the street.': 'everyday_urbanist_older',
	'The commuter seeking shade and clean air.': 'everyday_urbanist_commuter',
	'Even the driver stuck in traffic.': 'everyday_urbanist_driver',
	'Live StreetSmart.': 'live_streetsmart',
	'Why': 'why',
	'Smart?': 'smart_question',
	'StreetSmart exists to challenge a century of urban planning that prioritised speed and flow over people and the planet.':
		'why_body_1',
	'This movement-first approach has led to deadly heat, flooding, pollution, road fatalities, isolation, and a loss of freedom - particularly for children. Our streets have become climate-risk zones and health hazards.':
		'why_body_2',
	'StreetSmart flips the script by shifting mindsets.': 'why_body_3',
	'We empower communities to see streets not just as routes for movement, but as places where children can walk safely, nature can flourish, and communities can thrive in the face of climate change.':
		'why_body_4',
	'Through street-level data, community voices, and storytelling, we spark curiosity and drive meaningful change.':
		'why_body_5',
	'StreetSmart is more than a platform. It is a movement for a culture that values people over cars, nature over asphalt, and belonging over congestion.':
		'why_body_6',
	'Myth-busters': 'myth_busters_title',
	'StreetSmart debunks common myths about urban transit, mobility and cities.':
		'myth_busters_intro',
	'image credits: https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/':
		'image_credits_amsterdam',
	'image credits: https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/':
		'image_credits_bogota',
	'image credits: https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/':
		'image_credits_bridge',
	'image credits: https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/':
		'image_credits_pickup',
	'MYTH #1': 'myth_1_label_hash',
	'MYTH #2': 'myth_2_label_hash',
	'MYTH #3': 'myth_3_label_hash',
	'MYTH #4': 'myth_4_label_hash',
	'MYTH 1': 'myth_1_label',
	'MYTH 2': 'myth_2_label',
	'MYTH 3': 'myth_3_label',
	'MYTH 4': 'myth_4_label',
	'TRUTH': 'truth_caps',
	'Truth': 'truth',
	'Proof': 'proof',
	'Sources': 'sources',
	'StreetSmart': 'streetsmart',
	'“We are not Amsterdam. Our city doesn’t have a walking/ cycling culture.”':
		'myth_1_quote',
	'People always respond to the environments we create. Infrastructure shapes behaviour.':
		'myth_1_truth_card_1',
	'When infrastructure prioritises people, behaviours shift.':
		'myth_1_truth_card_2',
	'People always respond to the environments we create. Infrastructure shapes behaviour. When infrastructure prioritises people, behaviours shift.':
		'myth_1_truth_full',
	'"If you design for cars and traffic, you get cars and traffic. If you design for people and places, you get people and places." - Walter Kulash':
		'myth_1_walter_quote',
	'Amsterdam wasn’t born cycling. It was built for it. In the 1970s, it was choked with cars. The city transformed its streets, and people changed how they moved.':
		'myth_1_amsterdam',
	'In Bogotá, cycling rates increased by 50% between 2000 and 2015 after the city expanded its network of protected bike lanes, especially along major corridors. This infrastructure shift led to a significant reduction in traffic congestion and improvements in public health. Bogotá’s cycling boom demonstrates that when cities invest in safe, accessible infrastructure, people choose sustainable modes of transport':
		'myth_1_proof',
	'StreetSmart helps cities identify where demand already exists but is suppressed by poor design, unlocking rapid shifts with small, targeted improvements.':
		'myth_1_streetsmart',
	'Cover image: https://exploring-and-observing-cities.org/2016/01/11/amsterdam-historic-images-depicting-the-transition-from-cars-to-bikes/':
		'source_cover_amsterdam',
	'Bogotá’s Mobility Department, ITDP Latin America Reports, El Tiempo':
		'source_bogota_reports',
	'"Adding more road lanes will ease congestion and improve traffic flow."':
		'myth_2_quote',
	'Building more road space doesn’t solve congestion – it actually creates more. This is known as induced demand: adding more lanes attracts more drivers, quickly filling up the new capacity.':
		'myth_2_truth',
	'A 2011 study by economists Matthew Turner and Gilles Duranton (The Fundamental Law of Road Congestion) found that vehicle kilometres travelled increase proportionally to road expansion – meaning new lanes fill up almost immediately.':
		'myth_2_proof',
	'Example: Houston’s Katy Freeway – expanded to 23 lanes – became even more congested than before, with commute times increasing by up to 30% within a few years after the expansion':
		'myth_2_example',
	'Instead of chasing a losing battle by widening roads, StreetSmart empowers cities to reclaim space for people by identifying where a rethink is needed and showing what’s possible beyond endless road expansion.':
		'myth_2_streetsmart',
	'Cover image: https://www.lanacion.com.py/estilodevida/2024/12/13/cumple-50-anos-la-ciclovia-de-bogota-una-revolucion-que-inspiro-al-mundo/':
		'source_cover_bogota',
	'Houston Chronicle, 2014': 'source_houston',
	'"Pedestrian bridges are designed for pedestrians."': 'myth_3_quote',
	'Pedestrian bridges are often designed with cars in mind, prioritising vehicle flow over pedestrian convenience. They force people to take detours or climb stairs, making them inefficient and inaccessible.':
		'myth_3_truth_card',
	'Pedestrian bridges are often designed with cars in mind, prioritising vehicle flow over pedestrian convenience. They force people to take detours or climb stairs, making them inefficient and inaccessible, especially for children, caregivers, the elderly, and those with disabilities. At-grade crossings are the true pedestrian-friendly solution.':
		'myth_3_truth',
	'Cities like Paris and Bogotá have shifted towards at-grade crossings to improve accessibility and streamline pedestrian movement. Studies show that pedestrian bridges often result in lower usage due to the inconvenience they create':
		'myth_3_proof',
	'StreetSmart advocates for at-grade crossings, guiding cities towards safer, more accessible solutions for all users.':
		'myth_3_streetsmart',
	'Cover image:https://www.centroidpm.com/pedestrian-bridges-make-cities-less-walkable-urban-projectization/':
		'source_cover_bridge',
	'Paris Transport Policy Reports': 'source_paris_reports',
	'Bogotá Urban Mobility Studies': 'source_bogota_studies',
	'"Bigger cars are safer."': 'myth_4_quote',
	'Big cars make the streets more dangerous for everyone outside the vehicle. Larger vehicles, like SUVs and trucks, increase the risk of fatal collisions with pedestrians and cyclists. They take much longer to stop and, due to their height, drivers can’t see pedestrians.':
		'myth_4_truth_card',
	'Big cars make the streets more dangerous for everyone outside the vehicle. Larger vehicles, like SUVs and trucks, increase the risk of fatal collisions with pedestrians and cyclists. They take much longer to stop and, due to their height, drivers can’t see pedestrians, especially children, even just a few feet in front of the car. Moreover, the higher bonnet of large vehicles means pedestrians are more likely to suffer life-threatening brain injuries when struck, rather than less severe leg injuries typical of smaller vehicles.':
		'myth_4_truth',
	'Studies show that pedestrians hit by larger vehicles are significantly more likely to be killed. SUVs and pickups are 2-3 times more likely to fatally injure pedestrians than smaller cars. The higher driving position means poor visibility, particularly for children, while the raised bonnet height leads to more severe head injuries when pedestrians are hit, often causing fatal brain trauma.':
		'myth_4_proof',
	'StreetSmart envisions streets designed for people, not oversized vehicles. We advocate for reclaiming space, reducing danger, and creating safer, more liveable urban environments.':
		'myth_4_streetsmart',
	'Cover image:https://www.consumerreports.org/cars/car-safety/the-hidden-danger-of-big-pickup-trucks-a9662450602/':
		'source_cover_pickup',
	'IIHS': 'source_iihs',
	'JAMA Surgery Study': 'source_jama',
	'NHTSA': 'source_nhtsa',
	'Meet the people behind StreetSmart': 'team_title',
	'Founder & Urban Innovation Lead': 'founder_title',
	'Reena Mahajan is an architect, urban planner, and the founder of':
		'reena_bio_prefix',
	'Studio DiverCity': 'studio_divercity',
	'. She brings nearly two decades of international experience designing people-centred, nature-positive cities — blending water-sensitive design, sustainable mobility, and gender-responsive planning into bold, holistic solutions.':
		'reena_bio_suffix',
	'StreetSmart was born from lived experience. While raising a child in Montevideo, Reena saw how car-dominated streets restrict freedom, safety, and everyday life — especially for children. In response, she led the #MontevideoPacificada campaign, using visual advocacy, public dialogue, and design to push for change. The result: safer crossings, new bike lanes, and a cultural shift around mobility.':
		'reena_story',
	'Now based in Paris, she’s building StreetSmart to scale that impact — combining data, design, and public engagement to help cities put people and the planet first.':
		'reena_now',
	'Launch Team': 'launch_team',
	'StreetSmart’s launch team came together through the Climatebase Fellowship and beyond — a multidisciplinary group united by the belief that streets should support freedom, health, and climate resilience.':
		'launch_team_body_1',
	'With experience spanning urban planning, technology, design, and advocacy, the team collaborates across disciplines to build a tool that empowers people, informs decision-makers, and reimagines what streets can be.':
		'launch_team_body_2',
	'Core Contributors': 'core_contributors',
	'Contributors & supporters': 'contributors_supporters',
	'Early contributors': 'early_contributors',
	'Anders Ward Danbi Kim Divya Bisht Elzaphan Murage Icare Duplessey Jayabalambika R Sirid Kellermann Scott Baker':
		'early_contributors_names',
	'Design Lead': 'role_design_lead',
	'Backend Developer': 'role_backend_developer',
	'Urban Systems Strategist': 'role_urban_systems_strategist',
	'Brand Identity Designer': 'role_brand_identity_designer',
	'Urban Researcher': 'role_urban_researcher',
	'Tech & Operations Lead': 'role_tech_operations_lead',
	'Frontend Engineer': 'role_frontend_engineer',
	'AI & Geospatial Engineer': 'role_ai_geospatial_engineer',
	'Urban Designer': 'role_urban_designer',
	'Advisor': 'role_advisor',
	'GIS Researcher': 'role_gis_researcher',
	'Product Manager': 'role_product_manager',
	'Fullstack AI Engineer': 'role_fullstack_ai_engineer',
	'Software Developer': 'role_software_developer',
	'Community Researcher': 'role_community_researcher',
	'AI/ML Developer': 'role_ai_ml_developer',
	'Try StreetSmart Now': 'try_now_title',
	'StreetSmart is free-to-use and fully in-browser, no download necessary!':
		'try_now_body',
	'beta@livestreetsmart.com': 'email',
	'Disclaimer:': 'disclaimer_label',
	'StreetSmart is currently under development. Please': 'disclaimer_body_1',
	'contact us': 'contact_us_lower',
	'if you experience any issues or anything you need to report.':
		'disclaimer_body_2',
	'StreetSmart Pilot': 'pilot_label',
	'Run a pilot in your city': 'pilot_hero_title',
	'Understand how streets perform in everyday use, and turn that into better decisions.':
		'pilot_hero_body',
	'Cities need to adapt streets to heat, flooding and everyday safety, yet decisions are still shaped by data that often misses how streets are actually experienced.':
		'pilot_intro_1',
	'StreetSmart combines street-level observation, participant input and AI-assisted image analysis. It reveals conditions such as comfort, safety, shade, greenery and movement — generating clear, usable evidence to guide street design and climate adaptation.':
		'pilot_intro_2',
	'Designed for cities, organisations and public agencies working on street transformations.':
		'pilot_intro_3',
	'StreetSmart at a Glance': 'pilot_glance_label',
	'How it works': 'pilot_how_it_works',
	'Analyse': 'pilot_analyse',
	'AI-assisted analysis of street photos to assess liveability conditions':
		'pilot_analyse_body',
	'Express': 'pilot_express',
	'People describe how it feels to use the street — cross, wait, rest, move':
		'pilot_express_body',
	'Inform': 'pilot_inform',
	'Clear visual evidence to support design, prioritisation and dialogue':
		'pilot_inform_body',
	'Facilitated street audit combining a walkshop and a digital tool':
		'pilot_approach_title',
	'A structured, adaptable process that works with your local context and objectives.':
		'pilot_approach_body',
	'Snap': 'pilot_snap',
	'Photograph selected street segments': 'pilot_snap_body',
	'Reflect': 'pilot_reflect',
	'Short prompts capture lived experience': 'pilot_reflect_body',
	'Assess': 'pilot_assess',
	'Analysis of pavements, crossings, shade, greenery, traffic conditions':
		'pilot_assess_body',
	'Input': 'pilot_input',
	'Participants validate and enrich observations': 'pilot_input_body',
	'Debrief': 'pilot_debrief',
	'Collective discussion to identify priorities': 'pilot_debrief_body',
	'Value for your city or organisation': 'pilot_value_title',
	'What It Enables': 'pilot_enables_title',
	'Rapid diagnosis of street conditions': 'pilot_enable_rapid',
	'Identification of priority areas': 'pilot_enable_priority',
	'Shared understanding between communities and decision-makers':
		'pilot_enable_shared',
	'Earlier input into planning decisions': 'pilot_enable_earlier',
	'Outputs': 'pilot_outputs_title',
	'Pilot summary with key insights and visual mapping':
		'pilot_output_summary',
	'Priority areas and quick-win recommendations': 'pilot_output_quick_wins',
	'Evidence base for local authorities': 'pilot_output_evidence',
	'Framework for scaling': 'pilot_output_scaling',
	'Early Pilot Experience': 'pilot_early_label',
	'Tested on the ground in Delhi': 'pilot_delhi_title',
	'StreetSmart has already been tested through an initial pilot in Delhi, demonstrating how it works in real conditions and refining the approach and interface ahead of broader collaborations.':
		'pilot_delhi_body_1',
	'The pilot combined on-site observation, participant input and analysis to identify priority issues and areas for improvement.':
		'pilot_delhi_body_2',
	'Implementation': 'pilot_implementation',
	'Delivered through a guided process combining the platform, a walkshop and facilitation.':
		'pilot_implementation_1',
	'The methodology and interface are adapted to the context and objectives of each project.':
		'pilot_implementation_2',
	'We are currently in private beta. Pilot collaborations and partnerships available.':
		'pilot_beta_note',
	'Urban planner and architect with over 20 years of international experience across Europe, Latin America, Africa and South Asia. She leads urban development and regeneration projects while working at the intersection of design, policy and public engagement to reframe how cities define priorities.':
		'pilot_founder_bio',
	'StreetSmart is built by a multidisciplinary team spanning urban planning, technology, design, and advocacy — united by the belief that streets should support freedom, health, and climate resilience.':
		'pilot_team_blurb',
	'Meet the full team': 'pilot_full_team',
	'Interested in running a pilot in your city?': 'pilot_cta_title',
	'Get in touch to explore how StreetSmart can support street-level insight and climate adaptation in your context.':
		'pilot_cta_body',
	'StreetSmart app on mobile devices': 'alt_streetsmart_app',
	'Street analysis screenshot': 'alt_street_analysis',
	'User feedback screenshot': 'alt_user_feedback',
	'Neighbourhood insights screenshot': 'alt_neighbourhood_insights',
	'Language selector': 'lang_selector',
	'English': 'lang_english',
	'Français': 'lang_french',
}

export const m = new Proxy(
	{},
	{
		get(_target, key) {
			if (typeof key !== 'string') return undefined
			return () => {
				const locale = getLocale()
				return messages[locale]?.[key] ?? messages.en[key] ?? key
			}
		},
	}
)
