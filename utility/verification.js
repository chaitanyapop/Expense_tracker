const nodemailer=require('nodemailer')
async function verification(to)
{
    const random_number=Math.ceil(Math.random()*999999);
    const transporter= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user:"money.tracker25@gmail.com",
            pass:"zetlmpmyslzookpf"
        }
    })
    
    const info=await transporter.sendMail({
        from:"Money tracker <moneytracker25@gmail.com>",
        to: to,
        subject: "Verification code",
        text:"Your verification code is "+random_number
    })
  
    return random_number;
}

module.exports=verification;