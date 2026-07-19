# Notes
node - Javascript runtime environment
     - Server side programming
     - node -v
node REPL (read, avaluate, print, loop)
     - node
node files
     - node script.js
process
     - object provide info about the current node process
process.argv 
     - returns array containing the command line arguments passed was launched
module.exports
     -require - a built in function to include external modules that exist in seperate files
npm 
     - standard package manager
     - npm
All commands:

    access, adduser, audit, bugs, cache, ci,
    completion, config, dedupe, deprecate, diff,
    dist-tag, docs, doctor, edit, exec, explain,
    explore, find-dupes, fund, get, help, help-search,
    init, install, install-ci-test, install-test, link,
    ll, login, logout, ls, org, outdated, owner, pack,
    ping, pkg, prefix, profile, prune, publish, query,
    rebuild, repo, restart, root, run, sbom, search,
    set, shrinkwrap, star, stars, start, stop, team,
    test, token, undeprecate, uninstall, unpublish,
    unstar, update, version, view, whoami
installing packages
     - npm install package_name
     - node_modules folder contains every installed dependency for your project
     - package-lock.json = it records version of every installed dependency,including its sub- dependencies and their versions
package.json
     - contains descriptive and metadata about project
     - npm install
global
     - npm install -g package_name
     - npm link package_name
require vs import
     - we cant load only the pieces we need with require but with import , we cana selectively load only the pieces we need which can save memory
    