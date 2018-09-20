import {Component} from '@angular/core';
import {branch} from "@angular-devkit/schematics/src/tree/static";

declare var GitGraph: any;

@Component({
    selector: 'git-dashboard',
    templateUrl: './git-dashboard.html',
    styleUrls: ['./git-dashboard.css']
})
export class GitDashboardComp {

    /**
     * Master branch
     * @type {string}
     */
    master = "master";

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////   MODELS   //////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Model - Author name
     * @type {string}
     */
    authorName: string = 'Antonio Pastorino';

    /**
     * Model - Author email
     * @type {string}
     */
    authorEmail: string = 'antonio.pastorino@gmail.com';

    /**
     * Model - Nome branch per il commit
     * @type {string}
     */
    branch: string = 'master';

    /**
     * Model - Nome nuovo branch
     * @type {string}
     */
    newbranch: string = '';

    /**
     *  Model - Message
     * @type {string}
     */
    message: string = 'This is a commit message';


    /**
     *
     * @type {string}
     */
    startingbranch: string = this.master;


    ngOnInit() {
        console.log("Initializing...");
        this.initGraph();
        console.log("Graph initialized");
        console.log("Creating master");
        this.addBranch(this.master);
        console.log("Master created");
        console.log("Making a first commit...");
        this.getBranch(this.master).commit(
            {
                message: "First commit",
                author: "Antonio Pastorino <antonio.pastorino@gmail.com>"
            }
        );
        console.log("Done! Ready!");
    }

    /**
     * Submit del form per creare un commit
     */
    onSubmit() {


        let branch;
        let branch_name = this.branch;
        if (this.hasBranch(branch_name)) {
            branch = this.getBranch(branch_name);
        } else {
            if (branch_name == this.master) {
                branch = this.addNewBranch(branch_name);
            } else {
                branch = this.addBranch(branch_name);
            }

        }

        //beregister.merge(staging); // merges beregister in staging

        let commit_author = this.authorName + "<" + this.authorEmail + ">";
        let commit_message = this.message;

        branch.commit(
            {
                message: commit_message,
                author: commit_author
            }
        );
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////   GESTIONE DEL GRAFO   ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Template del grafo
     * @type {boolean}
     */
    graphTemplate: any = false;

    /**
     * Grafo git
     * @type {boolean}
     */
    graph: any = false;

    /**
     * Restistuisce il grafo git
     */
    getGraph = function () {
        this.initGraph();
        return this.graph;
    };

    /**
     * Inizializza il template del grafo git
     */
    initGraphTemplate = function () {
        if (!this.graphTemplate) {
            var templateConfig = {
                colors: ["#467CC3", "#CB443C", "#ddd"],
                branch: {
                    lineWidth: 6,
                    spacingX: 50,
                    showLabel: true,
                },
                commit: {
                    spacingY: -80,
                    dot: {
                        size: 10
                    },
                    message: {
                        displayAuthor: true,
                        displayBranch: false,
                        displayHash: false,
                        font: "normal 10pt Verdana"
                    },
                    shouldDisplayTooltipsInCompactMode: false,
                    tooltipHTMLFormatter: function (commit) {
                        return "" + commit.sha1 + "" + ": " + commit.message;
                    }
                }
            };
            this.graphTemplate = new GitGraph.Template(templateConfig);
        }
    };

    /**
     * Inizializza il grafo git
     */
    initGraph = function () {
        this.initGraphTemplate();
        if (!this.graph) {
            this.graph = new GitGraph({
                reverseArrow: false,
                orientation: "vertical",
                mode: "extended",
                template: this.graphTemplate
            });
        }
    };


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////   GESTIONE DEI BRANCHES   ///////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Elenco di branches attivi
     * @type {any[]}
     */
    branches = [];


    /**
     * Verifica se un branch è già stato creato
     * @param branch
     * @returns {boolean}
     */
    hasBranch = function (branch) {
        let res = false;
        this.branches.forEach(function (el) {
            if (el.name == branch) {
                res = true
            }
        });
        return res;
    };

    /**
     * Recupera e restituisce un determinato branch
     *
     * @param branch
     * @returns {any}
     */
    getBranch = function (branch) {
        let res = null;
        this.branches.forEach(function (el) {
            if (el.name == branch) {
                res = el
            }
        });
        return res;
    };

    /**
     * Aggiunge un nuovo branch a partire dalla head corrente
     * @param branch
     * @returns {any}
     */
    addNewBranch = function (branch) {
        if (!this.hasBranch(branch)) {
            let new_branch = this.getGraph().branch({name: branch});
            this.branches.push(new_branch);
            return new_branch;
        } else {
            return this.getBranch(branch);
        }
    };

    /**
     * Biforca un nuovo branch a partire da un branch esistente
     * @param branchName
     * @param {string} startingFrom
     * @returns {any}
     */
    addBranch = function (branchName, startingFrom = 'master') {
        if (branchName == this.master) {
            this.addNewBranch(branchName);
        }

        if (!this.hasBranch(branchName)) {
            let starting_branch;
            if (!this.hasBranch(startingFrom)) {
                starting_branch = this.addNewBranch(startingFrom);
            } else {
                starting_branch = this.getBranch(startingFrom);
            }

            let new_branch = starting_branch.branch(
                {
                    name: branchName,
                    parentBranch: starting_branch
                }
            );
            this.branches.push(new_branch);
            return new_branch;
        } else {
            return this.getBranch(branchName);
        }
    };

    mergeBranches(branchName, destination) {
        if (this.hasBranch(branchName) && this.hasBranch(destination)) {
            let branch = this.getBranch(branchName)
            let destination_branch = this.getBranch(destination);
            branch.merge(destination_branch);
        }
    }
}
