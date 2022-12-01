const publicUrl = process.env.PUBLIC_URL === "" ? "" : "https://bruesselbach.com/belovedmonsters";

const dullahan = "55cc0dae05cec404e5caea7d0ee9e778.jpg";
const gestalt = "af4d4c585e2e7f03b27886a68f76969f.jpg";
const jerseydevil = "40ac0bf4b757aa347f3b4d17e2ec5c74.jpg";
const jinni = "dca48320574bc8276440ca944776aaf9.jpg";
const kit = "d990a5396b14205d53700a3a2e3b2d18.jpg";
const manananggal = "b5c0081ef74b7e94fd8ebb5fb84ea5c1.jpg";
const manticore = "1ad2965514c77a98a54a67b03afe201f.png";
const medusa = "ed487064ebf61db2a5bfbdd6601acae5.jpg";
const minotaur = "0298d6c7a2da8af9dc280c92f6a65855.jpg";
const reptilian = "3aa0caa7b35c08c91b6f2e30423fea1a.jpg";
const selkie = "faefc5423424d9a49446485b4edfc1e3.jpg";
const siren = "867739ab95bd2c46aadd80ab5a8f497e.jpg";
const sphinx = "a78c2b90ce9dbe7a1d5c0717ddca683e.jpg";
const succubus = "bed33ba654fb582653c358440f5bf425.jpg";
const sylph = "356d8da7cfe56b5cf81763012a8ee63c.jpg";
const vampire = "85d4322ceedca3fed5a04ff30129754e.jpg";
const fairy = "fairy.jpg";


const gallery = {
    galleryItems: [
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
            image: publicUrl + "/" + fairy,
            title: "Fairy",
            model: "Saje",
            year: 2022,
            medium: "oil on canvas",
            height: 42,
            width: 32,
            units: "in"
        },
    ]
}

export default gallery