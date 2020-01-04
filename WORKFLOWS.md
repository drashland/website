# Workflows

## Updating Branches

* The `staging` and `production` branches do not have to be updated from your local machine. The CI/CD process makes sure they are up to date with `master` before any branch is merged into them. All branches are based off of `master`, so there should not be any misalignments with tracking.

## New Features

* Set up your branch

```
git checkout master
git pull
git checkout -b "your-branch-with-the-issue-number"
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
