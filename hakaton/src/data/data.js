const data = {
  Region: [
    {
      id: 1,
      name: "GrandEst",
      url: "https://c4.wallpaperflare.com/wallpaper/483/114/560/strasbourg-france-alsace-lorraine-wallpaper-preview.jpg",
      desc: "De grands espaces naturels propices au ressourcement ou aux vacances actives, des lieux patrimoniaux et culturels prestigieux, des savoir-faire ancestraux, une gastronomie réputée dans le monde entier… le Grand Est vous promet une évasion totale en plein cœur de l’Europe.",
    },
    {
      id: 2,
      name: "IleDeFrance",
      url: "https://france3-regions.francetvinfo.fr/image/6tid-aN2WJ9Qza7vDLx-1B39z6c/600x400/regions/2020/06/09/5edee828a203a_maxstockfr242287.jpg",
      desc: "Si l'histoire et la culture vous passionne, vous allez être gâté durant votre séjour en Île-de-France. Cette région est riche en histoire et en culture comme en témoigne ses nombreux châteaux et monuments. Parmi les plus important, il y a le célèbre château de Versailles. C'est l'un des monuments phares de la France.",
    },
    {
      id: 3,
      name: "Bretagne",
      url: "https://france3-regions.francetvinfo.fr/image/wPbY0-OUScDFVuEHdnGBMFYzxUE/600x400/regions/2020/06/09/5edf4332a367a_saint_mathieu_avec_les_armeries_yann_quiviger-3215501.jpg",
      desc: "La Bretagne possède de nombreux atouts : une attractivité touristique forte et des patrimoines remarquables et variés (églises et chapelles, mégalithes, héritages maritimes, biens archéologiques, canaux et voies d’eaux intérieures…)",
    },
    {
      id: 4,
      name: "ProvenceAlpesCoteDazur",
      url: "https://c4.wallpaperflare.com/wallpaper/527/797/316/buildings-coast-cote-d-039-azur-wallpaper-preview.jpg",
      desc: "Une vaste région, comme le laisse supposer son nom à rallonge. Le PACA regroupe quelques-unes des régions les plus attractives de France, que ce soit pour le soleil, la mer, la gastronomie, la nature... Il y a la Provence, ses villages, sa garrigue et ses accents chantants, la Côte d'Azur, ses stations balnéaires, ses paillettes et ses îles, et les Alpes du Sud, leurs parcs naturels et ce littoral découpé et spectaculaire : une vaste région que le PACA, mais aussi un vrai dépaysement dans son propre pays !",
    },
  ],
  Touristique: [
    {
      id: 1,
      id_Region: 1,
      categorie: "eglise",
      name: "Cathédrale Notre-Dame de Strasbourg",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/52/4e/e4/cathedrale-notre-dame.jpg?w=1000&h=-1&s=1",
      desc: "Ne manquez pas la cathédrale de Strasbourg, l'une des attractions les plus célèbres de la ville. Les petites ruelles autour de l’église vous offriront des vues superbes sur la façade gothique. Il faut surtout voir l’horloge astronomique, avec des petits automates qui s'animent tous les jours à 12h30.",
    },
    {
      id: 2,
      id_Region: 1,
      categorie: "musee",
      name: "Musée National de l’Automobile",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/85/d3/e4/bugatti-royale.jpg?w=600&h=-1&s=1",
      desc: "Le Musée National de l’Automobile abrite la plus belle collection automobile du monde réunissant plus de 450 voitures d’exception. En 1957, les Frères Schlumpf achètent une ancienne filature de laine où ils installent quelques années plus tard l’ensemble de leur collection.",
    },
    {
      id: 3,
      id_Region: 1,
      categorie: "site naturel",
      name: "Parc de l'Orangerie",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/78/c6/park.jpg?w=2000&h=-1&s=1",
      desc: "En dehors des sites touristiques strasbourgeois, ce grand parc paisible est l’endroit idéal pour retrouver un peu de calme. Suivez un chemin et admirez la verdure abondante. Observez les singes et les oiseaux dans le petit parc zoologique, puis faites le tour du lac en pédalo.",
    },
    {
      id: 4,
      id_Region: 1,
      categorie: "musee",
      name: "Cité du Train",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/82/bc/28/parcours-spectacle-cite.jpg?w=1400&h=-1&s=1",
      desc: "Rendez-vous à la Cité du Train de Mulhouse pour découvrir deux siècles d’histoire et le plus grand musée ferroviaire d’Europe, sur 60 000 m². La Cité du Train, musée du patrimoine SNCF, vous fait revivre la grande aventure des chemins de fer en France, depuis ses origines en 1827 jusqu’à nos jours.",
    },
    {
      id: 5,
      id_Region: 1,
      categorie: "monument",
      name: "Barrage Vauban",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ff/89/11/barajin-uzerinden-manzara.jpg?w=2000&h=-1&s=1",
      desc: "Vu de loin ou traversé à pied, le barrage Vauban est l'endroit parfait pour faire des photos inoubliables. Traversez-le à pied et surtout ne loupez pas la terrasse sur le toit. Pensez à revenir la nuit pour le voir tout illuminé.",
    },
    {
      id: 6,
      id_Region: 1,
      categorie: "eglise",
      name: "Château du Haut-Koenigsbourg",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2b/14/6c/vue-aerienne-du-chateau.jpg?w=1400&h=-1&s=1",
      desc: "Le Haut-Koenigsbourg propose une vision remarquable de ce qu'était une forteresse de montagne au 15e siècle en Alsace. Depuis la plate-forme d'artillerie ou Grand Bastion, ce monument d'exception à la silhouette caractéristique, offre un panorama unique sur la plaine d'Alsace, les Vosges, la Forêt-Noire, et par temps clair, les Alpes.",
    },
    {
      id: 7,
      id_Region: 2,
      categorie: "musee",
      name: "La Galerie des Glaces",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/38/4a/93/the-hall-of-mirrors.jpg?w=1400&h=-1&s=1",
      desc: "Lieu le plus emblématique du Château, la galerie des Glaces ou Grande Galerie remplace une vaste terrasse ouverte sur le jardin que l’architecte Louis Le Vau avait conçue. Malcommode et surtout exposée aux intempéries, cette terrasse qui séparait l’Appartement du roi au nord et celui de la reine au sud, est rapidement condamnée.",
    },
    {
      id: 8,
      id_Region: 2,
      categorie: "eglise",
      name: "Cathédrale Notre-Dame de Paris",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8d/a4/84/the-amazingly-detailed.jpg?w=1600&h=-1&s=1",
      desc: "Visitez la Cathédrale Notre-Dame de Paris et découvrez ses sculptures, bas-reliefs, peintures, vitraux, et gargouilles. Construite au 12e siècle, sa proéminence sur l’île de la Cité en fait le coeur historique de Paris.",
    },
    {
      id: 9,
      id_Region: 2,
      categorie: "monument",
      name: "Arc de Triomphe",
      url: "https://cdn.sortiraparis.com/images/80/1467/523194-visuel-paris-arc-de-triomphe.jpg",
      desc: "L'arc de triomphe de l'Étoile, souvent appelé simplement l'Arc de Triomphe, est un monument situé à Paris, en un point haut à la jonction des territoires des 8ᵉ, 16ᵉ et 17ᵉ arrondissements, notamment au sommet de l'avenue des Champs-Élysées et de l'avenue de la Grande-Armée, lesquelles constituent un grand axe est-ouest parisien partant de la pyramide du Louvre, passant par l'obélisque de La Concorde, l'Arc de Triomphe lui-même et se terminant au loin par l'Arche de la Défense.",
    },
    {
      id: 10,
      id_Region: 2,
      categorie: "monument",
      name: "La Tour Eiffel",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/15/a3/92/c-emeric-livinec-sete.jpg?w=1400&h=-1&s=1",
      desc: "La tour Eiffel est le symbole incontournable de Paris dans le monde. Prenez un billet coupe-file et montez au sommet pour une vue spectaculaire, y compris de nuit. À chaque étage se trouvent des restaurants et des attractions telles que des expériences pour les enfants ou les appartements privés de Gustave Eiffel, ainsi qu’un bar à champagne au sommet.",
    },
    {
      id: 11,
      id_Region: 2,
      categorie: "musee",
      name: "Musée d'Orsay",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/b3/6e/20180601-122841-largejpg.jpg?w=1000&h=-1&s=1",
      desc: "Le Musée d’Orsay, connu pour ses collections de peinture Impressionniste et d'Art Nouveau, abrite aussi des objets de sculpture, d’art décoratif et de photographie datant de 1848 à 1914.",
    },
    {
      id: 12,
      id_Region: 2,
      categorie: "site naturel",
      name: "Parc de L'ile Saint Germain",
      url: "https://www.pariszigzag.fr/wp-content/uploads/2015/05/ilestgermain.jpg",
      desc: "L'histoire de l'île Saint-Germain est parsemée de combats successifs contre une urbanisation et une industrialisation sauvages des lieux. L'île Saint-Germain est avant tout une terre agricole. La construction du Comptoir central de Crédit Bonnard et Cie, puis du Pavillon de l'agriculture pour l'Exposition universelle de 1867 amorcèrent la transformation du site.",
    },
    {
      id: 13,
      id_Region: 3,
      categorie: "monument",
      name: "Les alignements de Carnac",
      url: "https://www.bretagne.com/sites/default/files/inline-images/alignement-de-carnac-menhir-bretagne.jpg",
      desc: "La plupart des visiteurs viennent pour les alignements de Kermario et du Ménec. L’alignement de Kermario comporte les plus gros menhirs de Carnac. Ces imposants blocs de granit font toujours leur effet en photos ! Le Géant du Manio qui s’y trouve est un menhir de 6 mètres de hauteur qui vaut largement le coup d'œil. ",
    },
    {
      id: 14,
      id_Region: 3,
      categorie: "eglise",
      name: "Cathédrale Saint-Corentin",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c6/1b/f4/cathedrale-st-corentin.jpg?w=1400&h=-1&s=1",
      desc: "Sur le site d'édifices antérieurs des IXème et XIème siècles, sa construction fut décidée en 1239 par l'évêque Rainaud, chancelier ducal de Pierre de Dreux, venu d'Ile de France. C'est le temps du gothique rayonnant, celui des chantiers où se reconstruisent Chartres, Reims ou Amiens. L'entreprise ambitieuse de Quimper part du choeur qui incorpore à son chevet la chapelle extérieure de Notre-Dame de la Victoire. Elle est freinée par les misères du XIVème, guerres de succession et épidémies, où s'édifie seulement le collatéral sud.",
    },
    {
      id: 15,
      id_Region: 3,
      categorie: "site naturel",
      name: "Parc du Thabor",
      url: "https://www.tourisme-rennes.com/uploads/2022/10/parc-du-thabor-franck-hamon-3963.jpg",
      desc: "Le parc du Thabor, situé à proximité du centre-ville de Rennes dans le département français d'Ille-et-Vilaine en région Bretagne, est un parc public aménagé sur plus de dix hectares dont la particularité est de mêler un jardin à la française, un jardin à l’anglaise et un important jardin botanique. Son nom fait référence à une montagne dominant le lac de Tibériade en Israël, le mont Thabor.",
    },
    {
      id: 16,
      id_Region: 3,
      categorie: "monument",
      name: "Domaine de Suscinio",
      url: "https://medias0.morbihan.com/1900x1000/3c734370-1a9d-48f6-9afd-464b62820a9e/domaine%20de%20suscinio%20-%20rabouan.jpg",
      desc: "Le château de Suscinio, résidence des ducs de Bretagne, se dresse au bord de l'océan Atlantique dans la commune de Sarzeau, au cœur de ce qui était autrefois un vaste espace boisé. Construit à la fin du Moyen Âge, il est situé dans la presqu'île de Rhuys, aujourd'hui formé de marais salants et de prairies.",
    },
    {
      id: 17,
      id_Region: 3,
      categorie: "musee",
      name: "Musée Départemental Breton",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f4/a8/98/musee-departemental-breton.jpg?w=1400&h=-1&s=1",
      desc: "Le musée départemental breton est installé depuis 1911 dans le Palais des Évêques de Cornouaille, le plus remarquable monument de Quimper après la cathédrale au sud de laquelle il est bâti. Deux ailes encadrent la Tour, construite pour Claude De Rohan (1507), l’un des plus beaux exemples architecturaux de la Renaissance en Bretagne. Il fut l’un des premiers musées en France, dès les années 1860-1870, à s’intéresser à l’ethnographie régionale et aux arts populaires. La collecte qui débuta alors, et qui se poursuit encore, fait de ce musée le principal conservatoire de l’histoire, de l’ethnographie et des arts régionaux du Finistère.",
    },
    {
      id: 18,
      id_Region: 3,
      categorie: "site naturel",
      name: "Golfe du Morbihan",
      url: "https://cms.ffrandonnee.fr/data/CR05/images/sites%20incontournables/golfe-du-morbihan-renac-michel.jpg",
      desc: "Là où l’océan s’aventure si loin au cœur des terres, le Parc naturel régional du Golfe du Morbihan demeure un espace ouvert aux influences multiples qui revendique avec fierté ses racines et sa culture. Inscrit au Club des plus belles baies du monde, le Golfe du Morbihan abrite une quarantaine d’îles blotties dans une petite mer intérieure de 5 km de large sur 21 km de long. Il s’ouvre sur l’Atlantique par un goulot d’un kilomètre de large situé entre Port-Navalo et Locmariaquer. Nichée au fond de la baie, la ville de Vannes est à 25 kilomètres de l’océan.",
    },
    {
      id: 19,
      id_Region: 4,
      categorie: "musee",
      name: "Citadelle de Saint-Tropez - Musée d'histoire maritime",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d9/ed/19/citadelle-de-saint-tropez.jpg?w=2000&h=-1&s=1",
      desc: "Situé dans une grande citadelle, ce musée évoque, de façon ludique, l’histoire maritime de la ville. Vous en apprendrez plus sur les époques où les Tropéziens partaient à la chasse des baleines, ou travaillaient avec l'Empire ottoman. Vous pourrez également profiter d’une vue panoramique sur Saint-Tropez.",
    },
    {
      id: 20,
      id_Region: 4,
      categorie: "site naturel",
      name: "Le Colorado provençal à Rustrel",
      url: "https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/18/19/10-raisons-de-visiter-le-Colorado-provencal-de-Rustrel.jpg?VersionId=D7Ua4J_3ISN9kqmWUkJgMVnjVK3b0oMu",
      desc: "Lové entre les montagnes du Luberon, au sud, et les monts du Vaucluse, au nord, le Colorado provençal est un site exceptionnel composé d’anciennes carrières d’ocre, à Rustrel. Ce haut lieu du pays d’Apt, conjuguant nature et patrimoine ocrier, dévoile une large palette de couleurs : du jaune vif au bordeaux, en passant par les tons orangés, parfois veinés de vert ou de bleu. Selon les zones, les spécialistes recensent pas moins de 25 tonalités différentes.",
    },
    {
      id: 21,
      id_Region: 4,
      categorie: "musee",
      name: "Villa & Jardins Ephrussi de Rothschild",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/67/7b/ba/villa-jardins-ephrussi.jpg?w=2000&h=-1&s=1",
      desc: "La villa Ephrussi de Rothschild, appelée aussi villa Île-de-France, est un des plus beaux palais de style Renaissance de la Côte d'Azur construit sur un sommet de la presqu'île du cap Ferrat entre 1905 et 1912 à Saint-Jean-Cap-Ferrat par la baronne Béatrice Ephrussi de Rothschild.",
    },
    {
      id: 22,
      id_Region: 4,
      categorie: "monument",
      name: "Amphithéâtre (les Arènes)",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/c6/06/33/arene-vue-d-en-haut.jpg?w=1400&h=-1&s=1",
      desc: "Une des meilleures structures préservées de l’architecture romaine, cet amphithéâtre est toujours utilisé pour des spectacles, concerts, et corridas, donc renseignez-vous avant votre visite. Même sans évènement spécial, le lieu vaut d’être visité, surtout pour les vues surprenantes du sommet.",
    },
    {
      id: 23,
      id_Region: 4,
      categorie: "eglise",
      name: "Le Palais des Papes d'Avignon",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/fd/9f/38/avignon.jpg?w=2000&h=-1&s=1",
      desc: "Le Palais des Papes d'Avignon est l'une des attractions touristiques les plus populaires de la ville. Comptez plusieurs heures pour explorer son intérieur qui donne un aperçu de la vie au Moyen Âge. Choisissez une visite guidée avec un billet coupe-file pour gagner du temps et mieux comprendre le lieu.",
    },
    {
      id: 24,
      id_Region: 4,
      categorie: "eglise",
      name: "Basilique Notre-Dame de la Garde",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e2/de/ac/interno.jpg?w=1400&h=-1&s=1",
      desc: "La Basilique Notre-Dame de la Garde est une icône Marseillaise. De son perchoir, elle veille sur le port et la ville. Visitez la Basilique pour une vue imprenable sur Marseille et faites un tour au Musée d’Art Sacré pour en apprendre plus sur l’histoire de ce site historique.",
    },
    {
      id: 25,
      id_Region: 1,
      categorie: "musee",
      name: "Parc de Wesserling",
      url: "https://www.visit.alsace/wp-content/uploads/lei/pictures/530000021-le-parc-de-wesserling-ecomusee-textile-1.JPG",
      desc: "Découvrez le Parc de Wesserling, ancienne Manufacture Royale et site actuel aux multiples facettes où patrimoine, tourisme, économie et vie locale ne font qu'un. Sur une journée ou un week-end, commencez votre balade dans un des cinq somptueux jardins, classés Jardin remarquable .La vie de ces jardins est rythmée par les saisons.",
    },
    {
      id: 26,
      id_Region: 1,
      categorie: "site naturel",
      name: "Le grand ballon",
      url: "https://vosgesquipeut.fr/wp-content/uploads/2020/08/DJI_0082-2-1920x1080.jpg",
      desc: "Culminant à 1424 mètres, le Grand-Ballon est le plus haut sommet du massif vosgien. Parfois appelé le Ballon de Guebwiller, il est bien connu des amateurs de randonnée et ski de font ou de ski alpin. Le tourisme se développe au Grand-Ballon au cours du XIXe siècle alors qu’apparaissent les chemins de fer dans les vallées.",
    },
    {
      id: 27,
      id_Region: 1,
      categorie: "eglise",
      name: "Temple Saint-Etienne",
      url: "https://www.tourisme-mulhouse.com/uploads/_CGSmartImage/img-df97a001ab6db7ac22a04e160f33ac2f.jpg",
      desc: "Situé sur la place de la Réunion, au coeur de Mulhouse, ce temple fut construit entre 1858 et 1868 sur l’emplacement d’une église datant du XIIème siècle. Ses plans sont dus à J.B. Schacre, dans un style néo-gothique alors très en vogue. Il abrite toujours les magnifiques vitraux qui se trouvaient dans cette ancienne église. Ces derniers sont parmi les plus beaux du Rhin supérieur.",
    },
    {
      id: 28,
      id_Region: 2,
      categorie: "eglise",
      name: "cathédrale de Saint-Denis",
      url: "https://www.tourisme-plainecommune-paris.com/sites/saint-denis-tourisme/files/styles/ratio_16_9_xl/public/content/images/1591626077-2135608793.jpg?itok=E1dddq0v",
      desc: "Premier monument gothique - on parle à son sujet de manifeste du nouvel art gothique - la basilique de Saint-Denis a été élevée au rang de cathédrale en 1966. 42 rois, 32 reines, 63 princes et princesses et 10 serviteurs du royaume y reposent.",
    },
    {
      id: 29,
      id_Region: 2,
      categorie: "site naturel",
      name: "Albert Kahn Musee et Jardins",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/60/d9/bc/albert-kahn-musee-et.jpg?w=1100&h=-1&s=1",
      desc: "En 1895, devenu propriétaire de l’hôtel particulier qu’il loue depuis deux ans à Boulognesur-Seine, Albert Kahn achète les parcelles avoisinantes et obtient une superficie de quatre hectares. Il installe sur ce terrain un jardin qu’il aménage selon un genre particulier du XIXe siècle, le jardin dit « de scènes ». Les ambiances se succèdent : jardin japonais, jardin anglais, forêt dorée, forêt vosgienne, jardin français évoquent les paysages qui lui sont chers et reflètent son idéal de fraternité entre les peuples.",
    },
    {
      id: 30,
      id_Region: 2,
      categorie: "musee",
      name: "Palais Garnier",
      url: "https://storage.googleapis.com/pod_public/1300/118407.jpg",
      desc: "Le Palais Garnier, qui accueille l’Opéra de Paris, fut commissionné par Napoléon III pendant la grande rénovation Haussmannienne. L'extérieur orné représente un mélange de styles, du Classique au Baroque.",
    },
    {
      id: 31,
      id_Region: 3,
      categorie: "site naturel",
      name: "La Côte de Granit Rose",
      url: "https://www.france-voyage.com/visuals/photos/cote-granit-rose-1373_w600.webp",
      desc: "La Côte de Granit Rose, dans le département des Côtes-d'Armor, entre Trébeurden et Perros-Guirec, doit son nom aux gigantesques blocs de granit qui émergent de la lande, en bordure de littoral. C'est le royaume des petites criques au sable blanc et à l'eau turquoise, des paysages sauvages et du sentier des douaniers, à parcourir à pied pour mieux goûter les charmes d'une nature insolite et préservée.",
    },
    {
      id: 32,
      id_Region: 3,
      categorie: "eglise",
      name: "Calvaire et église de Saint-Thégonnec",
      url: "https://www.france-voyage.com/visuals/photos/enclos-paroissiaux-1293_w600.webp",
      desc: "L'enclos paroissial de Saint-Thégonnec construit grâce à l’argent du lin se voulait grandiose, décoré par les meilleurs sculpteurs de l’époque, avec un clocher très haut. Il comporte le dernier des grands calvaires monumentaux de Bretagne.Malheureusement en 1998, un incendie accidentel a bien failli tout détruire. Le retable que vous verrez n’est plus l’original mais une reconstruction contemporaine. De même, la chaire et l’orgue ont été remis en état depuis. Ces travaux finis en 2005 ont finalement permis de retrouver quelques trésors comme la peinture de l’Annonciation de 1610 visible au-dessus de l’entrée.",
    },
    {
      id: 33,
      id_Region: 3,
      categorie: "musee",
      name: "Musée de l’Abeille",
      url: "https://www.bretagne.com/sites/default/files/styles/large/public/post/mus%C3%A9e_de_labeille_vivante_le_faouet.jpg?itok=cSm1EUiP",
      desc: "Dans les terres du Morbihan, en Bretagne intérieure, se trouve l’unique musée de l’abeille vivante. Sur la départementale allant de Lorient à Gourin, n’hésitez pas à faire un détour en prenant la sortie vers Le Faouët.",
    },
    {
      id: 34,
      id_Region: 4,
      categorie: "site naturel",
      name: "Le Sentier du Littoral, Cap d'Antibes",
      url: "https://www.antibesjuanlespins.com/sites/antibes/files/styles/ratio_16_9_xl/public/content/images/20151031-sentier_littoral-14_0.jpg?itok=o_F3pHPy",
      desc: "Cette destination est faite pour les fans de randonnée. Le sentier est accessible à tous niveaux, avec de belles vues sur la côte. Prenez votre maillot de bain pour profiter des criques.",
    },
    {
      id: 35,
      id_Region: 4,
      categorie: "site naturel",
      name: "Parc national des Calanques",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Vue_depuis_le_col_de_la_Candelle.jpg",
      desc: "Le Parc National des Calanques est un grand terrain de jeux en plein air. Randonnée, plongée, balade en bateau ou escalade s’offrent à vous. Essayez-vous au kayak, au stand-up paddle ou au VTT.",
    },
    {
      id: 36,
      id_Region: 4,
      categorie: "musee",
      name: "Musee Departemental Arles Antique",
      url: "https://www.arlestourisme.com/fr/assets/components/phpthumbof/cache/accueil3.cd8e7d0c7b4fe0a12553832a353b74a6.jpg",
      desc: "Ce musée a une architecture moderne mais elle contient des collections anciennes de la préhistoire jusqu’à l’antiquité. Vous pourrez y découvrir Arles sous un autre jour à travers des mosaïques, des statues, et plus encore.",
    },
  ],
};

export default data;
