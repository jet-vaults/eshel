# eshel

## Status

| | |
|---|---|
| **Domain** | `https://new.eshelltd.co.il` |
| **Pages URL** | `https://eshel.pages.dev` |
| **Storage mode** | `Standard` (`standard`) |
| **Storage account** | `jetvaults` |
| **Public storage** | `https://jetvaults.blob.core.windows.net/eshel/` |
| **Private storage** | `https://jetvaults.blob.core.windows.net/eshel-private/` |
| **Public container** | `eshel` |
| **Private container** | `eshel-private` |
| **Activated** | Yes |

## CNAME

Create this DNS record with your DNS provider:

| Type | Name | Value |
|------|------|-------|
| CNAME | `new.eshelltd.co.il` | `eshel.pages.dev` |

After DNS propagates, Cloudflare Pages will validate the custom domain and issue SSL. You do not need to run the Activate Site workflow for CNAME sites.

## Development

Edit files in `wwwroot/` and push to `main` - Cloudflare Pages auto-deploys.

Only the `wwwroot/` directory is served. Everything else stays in the repo.
