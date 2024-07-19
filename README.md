# github-action-template-webpack

An opinionated github actions template

## Try it now!

### GitHub Template

[Create a new repository from this template](https://github.com/new?template_name=github-action-template-webpack&template_owner=luxass&name=action-[name])

### Manual

If you prefer to do it manually without the template, you can do the following:

```bash
npx degit luxass/github-action-template-webpack action-[your-action-name]
cd action-[your-action-name]
pnpm install
```

## Usage

Before you start, you need to do the following to setup the project:

- [ ] Find and replace all `github-action-template` with your project name
- [ ] Update the License
- [ ] Update the README.md
- [ ] Update `action.yaml` file

> [!NOTE]
> You should probably remove the `test-action.yaml` workflow, and move it to a different repository.
> This will make it easier to test the action in a real repository, without having all the noise of the action repository.
