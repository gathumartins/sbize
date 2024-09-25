import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
})

export async function POST(Request:Request){
    const {email} = await Request.json();

    if(!email) new Response (JSON.stringify({error:"Email is required"}));

    try{
        const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
        if (!audienceId) throw new Error('MAILCHIMP_AUDIENCE_ID is not defined');
       const res = await mailchimp.lists.addListMember(audienceId, {email_address: email, status: "subscribed"})

        return new Response(JSON.stringify({res}));
    }catch(error:any) {
        return new Response(
            JSON.stringify({error: JSON.parse(error.response.text)})
        ) ;
    }
}