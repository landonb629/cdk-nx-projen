import { awscdk, typescript } from 'projen';

const cdkVersion = '2.123.0'
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@test/root',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

new awscdk.AwsCdkTypeScriptApp({
  parent: project,
  name: '@test/application-a',
  outdir: './packages/application-a',
  cdkVersion, 
  defaultReleaseBranch: 'main',
  deps: []
})

new typescript.TypeScriptProject({
  parent: project,
  name: '@test/environment-library',
  outdir: './packages/environment-library',
  defaultReleaseBranch: 'main',
})

project.synth();