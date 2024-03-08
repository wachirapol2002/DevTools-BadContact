pipeline {
    agent any

    environment {
        // Define variables
        DOCKER_IMAGE       = 'kaykaedesu/fastapi-webhook:latest'
        DOCKER_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Start Jenkins') {
            steps {
                // Checkout your source code from version control
             
                    sh 'echo Start Jenkins............'
                    sh 'echo docker : user = $DOCKER_CREDENTIALS_USR : password = $DOCKER_CREDENTIALS_PSW'
            }
        }
        stage('Hello Jenkins') {
            steps {
                // Checkout your source code from version control
             
                    sh 'echo Hello from jenkins'
            }
        }
    }
}