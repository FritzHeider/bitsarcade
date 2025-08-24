<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    */

    // Include all API endpoints (add Sanctum cookie route if you use it)
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    // ✅ Explicitly list allowed origins (env + prod) and use patterns for previews
    'allowed_origins' => array_filter([
        env('APP_URL'),                    // e.g. http://localhost:3000 or https://yourdomain.com
        env('FRONTEND_URL', 'https://bitsarcade.vercel.app'),  // production frontend
    ]),

    // ✅ Tight preview-domain patterns (adjust to your project naming)
    // Examples:
    // - Vercel preview: https://bitsarcade-git-<branch>-<user>.vercel.app
    // - Vercel preview (alt): https://bitsarcade-<hash>.vercel.app
    'allowed_origins_patterns' => [
        '/^https:\/\/bitsarcade-[a-z0-9-]+\.vercel\.app$/i',
        '/^https:\/\/bitsarcade-git-[a-z0-9-]+-[a-z0-9-]+\.vercel\.app$/i',
    ],

    'allowed_headers' => ['*'],
    'exposed_headers' => [],

    // Cache preflight responses (seconds); 0 disables caching.
    'max_age' => 3600,

    // ⚠️ If you use cookie auth (Sanctum/session), set this to true and DO NOT use '*' origins
    'supports_credentials' => false,
];
