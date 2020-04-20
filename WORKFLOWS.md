# Workflows

## Process For Creating New Features

* Set up your branch (example below)

```
git checkout master
git pull
git checkout -b "ft-#1-doing-the-thing"
```

_Note: All new feature branches must be based off of the `master` branch._

* Make and commit changes.
* Make a pull request from your branch to  `staging`.
* (Reviewers) Approve pull request.
* (Admins) Merge branch into `staging` to trigger CI build.
* (CI) Build staging app and deploy to https://drash.land/staging.
* Verify work at https://drash.land/staging.
* If all is good, make a pull request from `staging` to the `production` branch.
* Delete your branch only when it has been deployed to in `production`.

## Production Deployments

Production deployments are triggered when a branch is merged into the `production` branch. The only branch that should be merged into the `production` branch should be `staging`.

### Handling Hotfixes

Hotfixes should be handled in the same way a new feature branch is handled/processed. However, there may be times where `staging` cannot be deployed to `production` (to get the hotfix in production) because it has features that are not ready to be released yet. If this is the case, then the hotfix branch can target `production` in a pull request. When the hotfix branch is merged into `production`, the CI process will build a new production app and push the app to the `master` branch.
