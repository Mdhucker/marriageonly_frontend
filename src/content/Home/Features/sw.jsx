import { Fingerprint, Users, Landmark } from "lucide-react";

const sw = {
  features: [
    { 
      title: "Utambulisho Uthibitisho", 
      desc: "NIDA na ukaguzi wa binadamu kwa kuaminika.", 
      icon: <Fingerprint size={36} /> 
    },
    { 
      title: "Ulinganifu wa Familia", 
      desc: "Kukabiliana na imani, utamaduni, na malengo ya muda mrefu.", 
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
