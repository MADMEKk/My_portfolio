# Vercel Deployment Guide

## Setting Up Environment Variables in Vercel

For the contact form to work properly on your Vercel deployment, you need to set up environment variables:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Click on "Settings" at the top navigation
4. In the left sidebar, click on "Environment Variables"
5. Add the following environment variables:

   - **Name**: `RESEND_API_KEY`  
     **Value**: Your Resend API key (e.g., `re_XRDUe11b_KENWSiQUbgmspT7EmCEq9QZK`)
     
   - **Name**: `RECIPIENT_EMAIL`  
     **Value**: Your email address (e.g., `aeddine360@gmail.com`)

6. Make sure both variables are selected for "Production", "Preview", and "Development" environments
7. Click "Save" to apply the changes

## Redeploy Your Application

After setting up the environment variables:

1. Go to the "Deployments" tab
2. Find your latest deployment
3. Click the three dots menu (⋮) and select "Redeploy"
4. Wait for the deployment to complete

## Testing the Contact Form

After redeployment:

1. Visit your portfolio website at [alaeddine-mekkaoui.vercel.app](https://alaeddine-mekkaoui.vercel.app)
2. Navigate to the Contact page
3. Fill out the form and submit it
4. Check your email to see if you received the test message

## Troubleshooting

If the contact form isn't working:

1. Check Vercel logs:
   - Go to your Vercel dashboard
   - Select your project
   - Click on "Deployments"
   - Select the latest deployment
   - Click on "Functions" to see logs for your API functions

2. Common issues:
   - Missing or incorrect environment variables
   - Resend API key expired or invalid
   - CORS issues (should be handled by the API function)
   - Network errors (check browser console)

3. If you see a specific error message, search for it in the [Resend documentation](https://resend.com/docs) or contact Vercel support. 