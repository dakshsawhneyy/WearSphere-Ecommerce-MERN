@Library('Shared') _
pipeline {
    agent any
    environment{
        SONAR_HOME = tool 'Sonar'
    }
    
    stages{
        stage("WorkSpace Empty"){
            steps{
                script{
                    cleanWs()
                }
            }
        }
        stage('Git Code Clone'){
            steps{
                script{
                    clone("https://github.com/dakshsawhneyy/WearSphere-Ecommerce-MERN.git","master")
                }
            }
        }
        stage("Trivy: File Scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }
        stage("OWASP: Dependency check"){
            steps{
                script{
                    owasp_dependency()
                }
            }
        }
        stage("SonarQube: Code Analysis"){
            steps{
                script{
                    sonarqube_analysis("Sonar","wearsphere","wearsphere")
                }
            }
        }
        stage("SonarQube: Code Quality Gates"){
            steps{
                script{
                    sonarqube_code_quality()
                }
            }
        }
        stage("Docker: Build Images"){
            steps{
                script{
                    dir('backend'){
                        docker_build("dakshsawhneyy","wearsphere-backend","latest")
                    }
                    dir('frontend'){
                        docker_build("dakshsawhneyy","wearsphere-frontend","latest")
                    }
                    dir('admin'){
                        docker_build("dakshsawhneyy","wearsphere-admin","latest")
                    }
                }
            }
        }
        stage("Docker: Push to DockerHub"){
            steps{
                script{
                    docker_push("wearsphere-backend","latest","dakshsawhneyy") 
                    docker_push("wearsphere-frontend","latest","dakshsawhneyy")
                    docker_push("wearsphere-admin","latest","dakshsawhneyy")
                }
            }
        }
        stage("Update Kubernetes Manifests") {
            steps {
                script {
                    k8s_manifests('latest') 
                }
            }
        }
    }
    post {
        success {
            emailext (
                to: 'dakshsawhney2@example.com',  
                subject: "SUCCESS: WearSphere Pipeline - ${currentBuild.fullDisplayName}",
                body: """
                    The Jenkins pipeline for the WearSphere project has successfully completed.
                    Build URL: ${currentBuild.absoluteUrl}
                    Build Status: SUCCESS
                """
            )
        }
        failure {
            emailext (
                to: 'dakshsawhney2@example.com',  // Replace with the recipient's email
                subject: "FAILURE: WearSphere Pipeline - ${currentBuild.fullDisplayName}",
                body: """
                    The Jenkins pipeline for the WearSphere project has failed.
                    Build URL: ${currentBuild.absoluteUrl}
                    Build Status: FAILURE
                """
            )
        }
    }
}
