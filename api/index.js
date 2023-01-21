import Express  from "express";
const app = Express();


app.use(Express.static("public"));
app.use(Express.json());

const biodata = {
    Nama   : ["Nama Lengkap",":","Ananda Pratama Indra Buana"],
    Usia   : ["Usia",":","20"],
    Tempat : [],
    Asal : ["Asal",":","Kota Tangerang Selatan"],
    Kegemaran : ["Hobi",":","Travelling"],
    Bahasa : ["Bahasa Pemrograman",":","Node.Js"],
    Sekolah : ["Sekolah",":","SMKS Media Informatika"]
}

app.get("/api/biodata",(req,res)=>{
    res.send(biodata)
})

app.listen(3000,()=>console.log("Server sedang berjalan"));