const publicUrl = process.env.PUBLIC_URL === "" ? "" : "https://bruesselbach.com/belovedmonsters";

const dullahan = "dullahan.jpg";
const gestalt = "gestalt.jpg";
const jerseydevil = "jerseydevil.jpg";
const jinni = "jinni.jpg";
const kit = "kit.jpg";
const manananggal = "manananggal.jpg";
const manticore = "manticore.png";
const medusa = "medusa.jpg";
const minotaur = "minotaur.jpg";
const reptilian = "reptilian.jpg";
const selkie = "selkie.jpg";
const siren = "siren.jpg";
const sphinx = "sphinx.jpg";
const succubus = "succubus.jpg";
const sylph = "sylph.jpg";
const vampire = "vampire.jpg";
const fairy = "fairy.jpg";
const zombie = "zombie.jpg";
const furies = "furies.jpg";
const werewolf = "werewolf.jpg";
const angel = "angel.jpg";
const centaur = "centaur.jpg;"


const gallery = {
    galleryItems: [
                {
            image: publicUrl + "/" + vampire,
            title: "Valerie the Vampire",
            model: "Marina",
            year: 2016,
            medium: "oil on canvas",
            height: 48,
            width: 24,
            units: "in"
        },
		{
            image: publicUrl + "/" + dullahan,
            title: "Dullahan",
            model: "Dahlia",
            year: 2019,
            medium: "oil on canvas",
            height: 36,
            width: 24,
            units: "in"
        },
		        {
            image: publicUrl + "/" + siren,
            title: "Siren",
            model: "Juno Tempest",
            year: 2019,
            medium: "oil on canvas",
            height: 48,
            width: 24,
            units: "in"
        },
        {
            image: publicUrl + "/" + gestalt,
            title: "Gestalt/Frankenstein's Monster",
            model: "Ashanti",
            year: 2019,
            medium: "oil on canvas",
            height: 48,
            width: 32,
            units: "in"
        },
		        {
            image: publicUrl + "/" + manticore,
            title: "Manticore",
            model: "Blaise",
            year: 2019,
            medium: "oil on canvas",
            height: 24,
            width: 18,
            units: "in"
        },
		        {
            image: publicUrl + "/" + kit,
            title: "Tamamo-no-mae",
            model: "Kitsune",
            year: 2020,
            medium: "oil on canvas",
            height: 36,
            width: 36,
            units: "in"
        },
		        {
            image: publicUrl + "/" + minotaur,
            title: "Minotaur",
            model: "Reginald",
            year: 2020,
            "month": "December",
            medium: "oil on canvas",
            height: 3,
            width: 2,
            units: "ft"
        },
		        {
            image: publicUrl + "/" + reptilian,
            title: "Reptilian",
            model: "self portrait",
            year: 2020,
            medium: "oil on canvas",
            height: 30,
            width: 21,
            units: "in"
        },        
		{
            image: publicUrl + "/" + medusa,
            title: "Medusa",
            model: "Louisa Ashe",
            year: 2021,
            "month": "May",
            medium: "oil on canvas",
            height: 3,
            width: 2,
            units: "ft"
        },
		       {
            image: publicUrl + "/" + manananggal,
            title: "Manananggal",
            model: "Amanda",
            year: 2021,
            medium: "oil on canvas",
            height: 40,
            width: 24,
            units: "in",
            "additionalInfo": "diptych"
        },
		        {
            image: publicUrl + "/" + succubus,
            title: "Succubus",
            model: "🍑",
            year: 2021,
            medium: "oil on canvas",
            height: 32,
            width: 23,
            units: "in"
        },
        {
            image: publicUrl + "/" + sylph,
            title: "Sylph",
            model: "Aster",
            year: 2021,
            medium: "oil on canvas",
            height: 80,
            width: 60,
            units: "cm"
        },
		        {
            image: publicUrl + "/" + selkie,
            title: "Selkie",
            model: "Rain",
            year: 2021,
            medium: "oil on canvas",
            height: 80,
            width: 60,
            units: "cm"
        },
		        {
            image: publicUrl + "/" + jinni,
            title: "Jinni",
            model: "Nik",
            year: 2022,
            medium: "oil on canvas",
            height: 36,
            width: 24,
            units: "in"
        },
        {
            image: publicUrl + "/" + jerseydevil,
            title: "The Jersey Devil",
            model: "Virgil",
            year: 2022,
            medium: "oil on canvas",
            height: 30,
            width: 24,
            units: "in"
        },
        {
            image: publicUrl + "/" + sphinx,
            title: "Sphinx",
            model: "Leeat",
            year: 2022,
            medium: "oil on canvas",
            height: 32,
            width: 36,
            units: "in"
        },
		        {
            image: publicUrl + "/" + fairy,
            title: "Fairy",
            model: "Saje",
            year: 2022,
            medium: "oil on canvas",
            height: 42,
            width: 32,
            units: "in"
        },
		{
            image: publicUrl + "/" + zombie,
            title: "Zombie",
            model: "Artemis",
            year: 2022,
            medium: "oil on canvas",
            height: 32,
            width: 24,
            units: "in"
        },
		{
            image: publicUrl + "/" + furies,
            title: "Furies",
            model: "Christy, Rebekkah, Echo",
            year: 2022,
            medium: "oil on canvas",
            height: 32,
            width: 48,
            units: "in"
        },
		{
            image: publicUrl + "/" + werewolf,
            title: "Werewolf",
            model: "Zyaire",
            year: 2023,
            medium: "oil on canvas",
            height: 30,
            width: 24,
            units: "in"
        },
		{
            image: publicUrl + "/" + angel,
            title: "Angel",
            year: 2023,
            medium: "oil on canvas",
            height: 36,
            width: 36,
            units: "in"
        },
		{
            image: publicUrl + "/" + centaur,
            title: "Centaur",
			model: "Brian",
            year: 2023,
            medium: "oil on canvas",
            height: 46,
            width: 32,
            units: "in"
        },
    ]
}

export default gallery