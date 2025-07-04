# Supabase Setup Guide

## Step 1: Create a Supabase Project
1. Go to https://supabase.com
2. Click "Start your project"
3. Create a new organization (if needed)
4. Create a new project

## Step 2: Get Your Credentials
1. In your Supabase dashboard, go to Settings > API
2. Copy your Project URL
3. Copy your anon/public key

## Step 3: Update Your Configuration
Replace the placeholder values in `lib/supabase.ts`:

```typescript
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseAnonKey = 'your-anon-key-here'
```

## Step 4: Enable Authentication
1. In Supabase dashboard, go to Authentication > Settings
2. Enable "Enable email confirmations" if you want email verification
3. Configure your Site URL (for development: `exp://localhost:8081`)

## Step 5: Test Your Setup
Your login and signup screens should now work with real authentication!

## Security Note
Never commit your actual Supabase keys to version control. Consider using environment variables in production.
