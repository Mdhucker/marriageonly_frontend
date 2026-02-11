import { Fingerprint, Users, Landmark } from "lucide-react";

const sw = {
  featuresTitle: "Ndoa yenye Uadilifu na Kusudio",

  featuresSubtitle: "Mfumo wa ulinganifu wa wanandoa unaoaminika, unaoendeshwa kwa imani, unaoheshimu ushiriki wa familia, utambulisho uliothibitishwa, na kufuata Nikah thabiti ya maisha yote.",
  
  experience: "Pata uhusiano wenye maana na unaoendeshwa kwa imani leo.",
  
  features: [
    { 
      title: "Utambulisho Uliothibitishwa", 
      desc: "NIDA na ukaguzi wa binadamu kwa ajili ya kuaminika.", 
      icon: <Fingerprint size={36} /> 
    },
    { 
      title: "Ulinganifu unaojikita kwenye Familia", 
      desc: "Kulinganisha imani, tamaduni, na malengo ya muda mrefu.", 
      icon: <Users size={36} /> 
    },
    { 
      title: "Ustahimilivu wa Maisha Yote", 
      desc: "Kujenga familia imara kwa vizazi vyote.", 
      icon: <Landmark size={36} /> 
    }
  ]
};

export default sw;
