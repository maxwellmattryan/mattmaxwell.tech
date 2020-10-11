## Continuous Integration

<br>

### What is it?

<br>

_[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)_, commonly referred to as "CI", is the process of incorporating changes to code, made either individually or by other contributors and collaborators, into the codebase. When changes are committed and accepted, the newly updated source code often goes through a pipeline of jobs to verify that it still builds, compiles, deploys, or anything that you need to verify works.  

<br>

It is worth mentioning that CI is often the first step within a larger pipeline, proceeded by _continuous delivery_ and / or _continuous deployment_, both referred to as "CD". These often involve things that are actively in production such as an API server or web application, so I will not focus on them in this post.  

<br><br>

### CMake

<br>

As of JUCE 6, the developers have provided extensive support for _[CMake](https://en.wikipedia.org/wiki/CMake)_, a cross-platform and compiler-independent tool for building C++ and C projects. With it we are no longer bound to relying on the Projucer for managing our project configuration or settings, or a particular IDE - there is more freedom now to use the tools each developer knows and loves. This is awesome!

<br>

In order to successfully build the project on your local machine, it's necessary to install CMake because we are not using the Projucer exporters.

<br><br>

#### Windows

<br>

Please visit the [downloads page](https://cmake.org/download/) of the CMake website to download the installer. Within "Latest Release", there is a section for binary distributions that will contain a corresponding download for your machine.

<br><br>

#### MacOS

<br>

Like Windows users, MacOS users are also available to download the installer via the CMake website's [download page](https://cmake.org/download/), but I found it significantly easier to just use [brew](https://brew.sh/).

<br>

```bash
brew install cmake
```

<br><br>

### GitHub Actions

<br>

_[GitHub Actions](https://github.com/features/actions)_ is a platform that offers a wide array of tools for a variety of projects in terms of CI / CD. The only requirement is a `.yml` file placed within a hidden `.github/` directory. The file contains information regarding pipeline configuration along with the different jobs or tasks for that particular pipeline. Once the file is committed into the repository, GitHub will automatically begin a new "workflow" according to its configuration settings.

<br><br>

## Setup 

<br>

The particular needs of a specific CI pipeline vary wildly across projects according to many things, namely type of project, stack, size, scope, complexity, amount of developers, business constraints - the list goes on and on. Despite all of that, creating a CI pipeline for a JUCE audio plugin is rather quite easy and straightforward, so let
s get started!

<br>

To begin, initialize an empty git repository with GitHub.

<br>

<div class="post__image-container">
    <picture>
        <source srcset="assets/images/blog/003/repo-init.webp" type="image/webp">
        <source srcset="assets/images/blog/003/repo-init.png" type="image/png"> 
        <img class="post__image" alt="Initializing repository on GitHub" src="assets/images/blog/003/repo-init.png">
    </picture>
</div>

<br>

Once that process is complete, clone the repository to your local machine and change into its root directory.

<br>

```bash
git clone https://github.com/<USERNAME>/<PROJECT_REPO>.git
cd <PROJECT_REPO>/
```

<br><br>

### Building the Projucer

<br>

Unfortunately we do still need to the Projucer to generate a new project for us. There is quite a lot of boilerplate code that is handled for us this way, so it is worth the few extra steps.

<br>

It is possible to add the JUCE repository as a git submodule, but I found this to not work as well or easily for the CI pipeline. An alternative solution is to simply clone the repository and include it in the `.gitignore` file.

<br>

```bash
git clone https://github.com/juce-framework/JUCE.git
```

<br>

Before we forget, add the repository to the `.gitignore` file since it would be unnecessary to track this code.

<br>

```ignore
# JUCE repository code
JUCE/
```

<br>

To use the Projucer, we must use CMake to configure and build it from the source code we just cloned. The `-B build` flag indicates an output folder named "build", and `-DJUCE_BUILD_EXTRAS=ON` tells CMake to include the extras, which we need for the Projucer. If you would like to also include example projects, just use `-DJUCE_BUILD_EXAMPLES=ON`. 

<br>

```bash
cd JUCE/
cmake -B build -DJUCE_BUILD_EXTRAS=ON .
cmake --build build --target Projucer
```

<br>

Once that's complete, open the newly built executable file to begin the process of starting a new JUCE project.

<br>

```bash
start build/extras/Projucer/Projucer_artefacts/Debug/Projucer.exe
```

<br><br>

### Starting a New Project

<br>

Select `File > New Project (Ctrl + N)` to begin configuring the new JUCE project. This framework is robust in that it offers developers the ability to make a variety of types of programs and applications, but we are most interested in the "Basic" option under "Plug-In".

<br>

<div class="post__image-container">
    <picture>
        <source srcset="assets/images/blog/003/jucer-project-init.webp" type="image/webp">
        <source srcset="assets/images/blog/003/jucer-project-init.png" type="image/png"> 
        <img class="post__image" alt="Configuring JUCE project" src="assets/images/blog/003/jucer-project-init.png">
    </picture>
</div>

<br>

_<span class='text--note'>NOTE: </span><span class='text--note-paragraph'>The Projucer will likely complain about an incorrect path for JUCE and its modules. This would only be an issue if we were using the Projucer, so you can safely ignore this.</span>_

<br>

_<span class='text--caution'>CAUTION: </span><span class='text--caution-paragraph'>Be sure to tell Projucer to place your project in the root folder of your repository (alongside the JUCE repository folder).</span>_

<br>

Before moving on, we need to do two housekeeping chores. First, remove the exporters that Projucer automatically added to our project since we are using CMake. We can also remove the `.jucer` file since we have all of the necessary boilerplate setup done for us already. 

<br>

```bash
cd ../
rm -r <PLUGIN_DIR>/Builds/ <PLUGIN_DIR>/<PLUGIN_NAME>.jucer
```

<br>

For the second item, add JUCE's library code to the `.gitignore` since that is generated for us automatically as well. We only truly care about the code that is in the `Source` folder.

<br>

```ignore
# JUCE repository and library code
JUCE/ 
<PLUGIN_DIR>/JuceLibraryCode/
```

<br><br>

### Writing the CMakeLists

<br>

We are now at the point to begin writing our `CMakeLists.txt` files that tell CMake how to compile our project, what to link it with, and how we want it configured. We will start by writing one in the root directory of the repository.

<br>

```
- JUCE/
- PLUGIN_DIR/
- .gitignore
- CMakeLists.txt    <--
- LICENSE
- README.md
```

<br>

The first thing we must do is check that the minimum version required for CMake is available, which is something we specify. Doing this guarantees that our build configurations will be executable by an arbitrary machine. This is a standard CMake command.

<br>

```cmake
cmake_minimum_required(VERSION 3.15)
```

<br>

_<span class='text--note'>NOTE: </span><span class='text--note-paragraph'>JUCE states that the minimum required version to compile its library code is 3.15.</span>_

<br>

The next instruction is to declare a project with the current version. Doing so will make CMake setup useful variables for JUCE to use in dealing with source and binary directories. This is a standard CMake command.

<br>

```cmake
project(<PLUGIN_TARGET> VERSION 0.0.1)
```

<br>

The next step is to tell CMake to add sub-directories for both our plugin and JUCE. Doing so will allow us the use [JUCE's CMake API](https://github.com/juce-framework/JUCE/blob/master/docs/CMake%20API.md) in other `CMakeLists.txt` files. This is a standard CMake command.

<br>

```cmake
add_subdirectory(JUCE)
add_subdirectory(<PLUGIN_DIR>)
```

<br>

Your first `CMakeLists.txt` file should look more or less something like this, including the four instructions explained above.

<br>

```cmake
cmake_minimum_required(VERSION 3.15)

project(<PLUGIN_TARGET> VERSION 0.0.1)

add_subdirectory(JUCE)
add_subdirectory(<PLUGIN_DIR>)
```

<br>

With this, we can write the second `CMakeLists.txt` that will contain the actual plugin configuration information. Create the empty file within the plugin's directory. 

<br>

```
- JUCE/
- PLUGIN_DIR/
    - JuceLibraryCode/
    - Source/
    - CMakeLists.txt    <--
- .gitignore
- CMakeLists.txt
- LICENSE
- README.md
```

<br>

The first instruction is from JUCE's CMake API, which adds a static library target with additional properties that provide information for JUCE. There are quite a lot of options worth exploring that I didn't include in this configuration, so please checkout the [documentation](https://github.com/juce-framework/JUCE/blob/master/examples/CMake/AudioPlugin/CMakeLists.txt) to see what all is possible.

<br>

```cmake
juce_add_plugin(<PLUGIN_TARGET>
    VERSION 0.0.1
    PLUGIN_MANUFACTURER_CODE <CODE_HERE>
    PLUGIN_CODE <CODE_HERE>
    FORMATS AU VST3 
    PRODUCT_NAME <PLUGIN_NAME>)
```

<br>

_<span class='text--caution'>CAUTION: </span><span class='text--caution-paragraph'>Both the plugin code and plugin manufacturer code must have four-character IDs with at least one upper-case character. The plugin code must also be a unique identifier.</span>_

<br>

For the source code generated by the Projucer, there is one problem we need to deal with. Each header file automatically tries to include the main JUCE header file with the line `#include <JuceHeader.h>`. This by itself isn't a problem, except that we just need to specify to CMake that we need to actually generate this file into the build tree, otherwise the compiler would throw a `fatal error C1083: Cannot open include file: 'JuceHeader.h': No such file or directory` at us. 

<br>

```cmake
juce_generate_juce_header(<PLUGIN_TARGET>)
```

<br>

Next we will explicitly tell CMake what source files to add and include for the plugin target. The visibility parameter of `PRIVATE` tells CMake to include the source files for ONLY the plugin target. This is a standard CMake command.

<br>

```cmake
target_sources(<PLUGIN_TARGET> PRIVATE
    Source/PluginEditor.cpp
    Source/PluginProcessor.cpp)
```

<br>

We also need to provide some preprocessor definitions to our target so JUCE can take of things for us. Here are simply telling JUCE that our plugin does not use a web browser or the curl command and can also replace VST2s as a VST3 binary file. This is a standard CMake command.

<br>

```cmake
target_compile_definitions(<PLUGIN_TARGET> PUBLIC
    JUCE_WEB_BROWSER=0
    JUCE_USE_CURL=0
    JUCE_VST3_CAN_REPLACE_VST2=0)
```

<br>

_<span class='text--note'>NOTE: </span><span class='text--note-paragraph'>There are quite a lot of useful things that can be defined with preprocessor definitions. Specifically, if you're trying to remove the splash screen or enable GPL mode then it is here that you do so.</span>_

<br>

The last instruction we need to provide to CMake links the JUCE audio utils to our plugin target. This is a standard CMake command.

<br>

```cmake
target_link_libraries(<PLUGIN_TARGET> PRIVATE
    juce::juce_audio_utils)
```

<br>

_<span class='text--note'>NOTE: </span><span class='text--note-paragraph'>If your plugin uses any binary resources (i.e. images, icons, fonts), be sure to link them in this command. Refer to an [example CMakeList.txt](https://github.com/juce-framework/JUCE/blob/master/examples/CMake/AudioPlugin/CMakeLists.txt#L87) to see what I am talking about.</span>_

<br>

With the previous commands, your second `CMakeLists.txt` file should look like the following.

<br>

```cmake
juce_add_plugin(<PLUGIN_TARGET>
    VERSION 0.0.1
    PLUGIN_MANUFACTURER_CODE <CODE_HERE>
    PLUGIN_CODE <CODE_HERE>
    FORMATS AU VST3 
    PRODUCT_NAME <PLUGIN_NAME>)

juce_generate_juce_header(<PLUGIN_TARGET>)

target_sources(<PLUGIN_TARGET> PRIVATE
    Source/PluginEditor.cpp
    Source/PluginProcessor.cpp)

target_compile_definitions(<PLUGIN_TARGET> PUBLIC
    JUCE_WEB_BROWSER=0
    JUCE_USE_CURL=0
    JUCE_VST3_CAN_REPLACE_VST2=0)

target_link_libraries(<PLUGIN_TARGET> PRIVATE
    juce::juce_audio_utils)
```

<br>

Now we can finally test our effort thus far by trying to build our project! We need to tell CMake the intended directory for our build and then to actually build the specified target (in this case attaching the suffix `_All` tells CMake to build all of the declared audio formats). 

<br>

```bash
cmake -B build .
cmake --build build --target <PLUGIN_TARGET>_All
```

<br>

To verify that the build was successful, ensure that the correctly formatted files were generated by looking in the folder path of `build/<PLUGIN_TARGET>/<PLUGIN_TARGET>_artefacts/`. In this folder you will find a subfolder for the build configuration (default is "Debug"), which will contain each format specified in the `CMakeLists.txt` file.

<br>

Before we move on, now that we have a new directory containing the output of the last CMake build execution, we need to add that to the `.gitignore`.

<br>

```ignore
# JUCE repository and library code
JUCE/ 
<PLUGIN_DIR>/JuceLibraryCode/

# CMake build output
build/
```

<br><br>

## Defining the Pipeline

<br>

Now that we have success in building our plugin locally, it is time to define a workflow file for our repository, which are just `.yml` files that GitHub uses to configure and describe our CI pipeline. GitHub looks for these files within a special hidden folder, so let's begin by creating a new directory and adding a simple `cmake.yml` file.

<br>

```bash
mkdir .github
cd .github/

mkdir workflows
cd workflows/

> cmake.yml
```

<br>

The contents of these files contain some basic but necessary information for describing each workflow. The first thing to configure is the workflow's name.

<br>

```yaml
name: <PLUGIN_NAME>
```

<br>

The next property is for telling the workflow when to trigger, which can occur during a variety of situations. It's possible to only trigger when pushes are made to one branch, all branches, all branches except one, etc. This is useful for things like pull requests where status checks must be successful in order to merge changes. In this particular workflow, GitHub will trigger it on a push to _any_ branch.

<br>

```yaml
on: [push]
```

<br>

We can also specify any environment variables that our code may use, but the most important one we care about right now is `BUILD_TYPE`, which tells us what build configuration to use (i.e. Debug, Testing, Release, Production).

<br>

```yaml
env:
  BUILD_TYPE: Release
```

<br>

The last and largest section contains the configuration for the workflow's different jobs, including their operating system and steps. This is where we will define each and every process our pipeline must execute in order to build the source code correctly. The steps we define here are going to be more or less the same from the ones that we have already executed.

<br>

To start, let's create a basic job named "build". The first step in a job is cloning our repository to the machine. We do this by creating a step with just a `name` and `uses` property. Here we are creating a step called "Preparation" that uses the "checkout" action, which is a native GitHub action that let's developers access repositories.

<br>

```yaml
jobs:
  build:
    runs-on: windows-latest

    steps:
    - name: "Preparation"
      uses: actions/checkout@v2
```

<br>

Similarly, we need to write a step for "checking out" the JUCE repository, which will be just like what did at the beginning of this project (although slightly different due to GitHub's machines using CMake 3.12)

<br>

```yaml
- name: "(JUCE) Clone Repository"
  uses: actions/checkout@v2
  with:
    repository: juce-framework/JUCE
    path: ${{runner.workspace}}/<REPO_DIR>/JUCE
```

<br>

_<span class='text--note'>NOTE: </span><span class='text--note-paragraph'>The "runner.workspace" is provided to us by GitHub, and we are free to use it anywhere.</span>_

<br>

The next few steps are responsible for creating the build environment, configuring the build, and actually building the source for the JUCE library, which we will need.

<br>

```yaml
- name: "(JUCE) Create Build Environment"
  working-directory: ${{runner.workspace}}/garm/JUCE
  run: cmake -E make_directory ${{runner.workspace}}/<REPO_DIR>/JUCE/build

- name: "(JUCE) Configuration"
  working-directory: ${{runner.workspace}}/garm/JUCE/build
  run: cmake ${{runner.workspace}}/<REPO_DIR>/JUCE

- name: "(JUCE) Build"
  working-directory: ${{runner.workspace}}/<REPO_DIR>/JUCE/build
  run: cmake --build .
```

<br>

Lastly, we need to do the exact same three steps with our own plugin.

<br>

```yaml
- name: "(<PLUGIN_NAME>) Create Build Environment"
  working-directory: ${{runner.workspace}}/<REPO_DIR>
  run: cmake -E make_directory ${{runner.workspace}}/<REPO_DIR>/build

- name: "(<PLUGIN_NAME>) Configuration"
  working-directory: ${{runner.workspace}}/<REPO_DIR>/build
  run: cmake ${{runner.workspace}}/<REPO_DIR>

- name: "(<PLUGIN_NAME>) Build"
  working-directory: ${{runner.workspace}}/<REPO_DIR>/build
  run: cmake --build . --config $BUILD_TYPE
```

<br>

With this the ultimate `cmake.yml` file should look something like this.

<br>

```yaml
name: <WORKFLOW_NAME>

on: [push]

env:
  BUILD_TYPE: Release

jobs:
  build:
    runs-on: windows-latest

    steps:
    - name: "Preparation"
      uses: actions/checkout@v2

    - name: "(JUCE) Clone Repository"
      uses: actions/checkout@v2
      with:
        repository: juce-framework/JUCE
        path: ${{runner.workspace}}/<REPO_DIR>/JUCE

    - name: "(JUCE) Create Build Environment"
      working-directory: ${{runner.workspace}}/garm/JUCE
      run: cmake -E make_directory ${{runner.workspace}}/<REPO_DIR>/JUCE/build

    - name: "(JUCE) Configuration"
      working-directory: ${{runner.workspace}}/garm/JUCE/build
      run: cmake ${{runner.workspace}}/<REPO_DIR>/JUCE

    - name: "(JUCE) Build"
      working-directory: ${{runner.workspace}}/<REPO_DIR>/JUCE/build
      run: cmake --build .

    - name: "(<PLUGIN_NAME>) Create Build Environment"
      working-directory: ${{runner.workspace}}/<REPO_DIR>
      run: cmake -E make_directory ${{runner.workspace}}/<REPO_DIR>/build

    - name: "(<PLUGIN_NAME>) Configuration"
      working-directory: ${{runner.workspace}}/<REPO_DIR>/build
      run: cmake ${{runner.workspace}}/<REPO_DIR>

    - name: "(<PLUGIN_NAME>) Build"
      working-directory: ${{runner.workspace}}/<REPO_DIR>/build
      run: cmake --build . --config $BUILD_TYPE
```

<br> 

With this file pushed to the repository, GitHub will automatically detect its existence and trigger a CI pipeline accordingly. We can view its progress in the "Actions" tab of our repository.

<br>

<div class="post__image-container">
    <picture>
        <source srcset="assets/images/blog/003/pipeline-log.webp" type="image/webp">
        <source srcset="assets/images/blog/003/pipeline-log.png" type="image/png"> 
        <img class="post__image" alt="Log of build pipeline" src="assets/images/blog/003/pipeline-log.png">
    </picture>
</div>

<br>

Congratulations! We've successfully set up a continuous integration pipeline for our project. However, we are overlooking one massively important part - there are no builds being performed on MacOS. Luckily, this is an easy fix.

<br>

Firstly, the workflow we just created is 90% already the way there. Create a copy of the file and name it `cmake.mac.yml` while also renaming the original to `cmake.win.yml`.

<br>

Before changing any code to operate on MacOS, first change the name in `cmake.win.yml` just for clarity's sake.

<br>

```yaml
name: <PLUGIN_NAME>-win
```

<br>

In order to specify MacOS as the operating system, we simply change the `runs-on` property for each job. In the `cmake.mac.yml` file, make the following change to the build job.

<br>

```yaml
jobs:
  build:
    runs-on: macos-latest

    ...
```

<br>

Now we can commit and push both files, and GitHub will magically detect them and automatically create workflows like it did before. Repeat this process if you'd like to create additional workflows for other circumstances like pull requests or issues.

<br>

<div class="post__image-container">
    <picture>
        <source srcset="assets/images/blog/003/multi-workflow.webp" type="image/webp">
        <source srcset="assets/images/blog/003/multi-workflow.png" type="image/png"> 
        <img class="post__image" alt="Multiple workflows" src="assets/images/blog/003/multi-workflow.png">
    </picture>
</div>

<br>

And that is how you can easily add a continuous integration pipeline to your JUCE project. If you have any additional questions about this process or would just like to say hi, please feel free to contact me. I'm a massive nerd and would most certainly love to talk about any of this stuff.

<br>

Thank you for checking out this post. Please checkout [my blog](https://mattmaxwell.dev/blog) to see more articles related to Audio Development and Software Engineering. Cheers!