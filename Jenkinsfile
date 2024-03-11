pipeline {
    agent any

    environment {
        // Define variables
        DOCKER_IMAGE       = 'kaykaedesu/devtool-badcontact:latest'
        DOCKER_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Start Jenkins') {
            steps {
                    sh 'echo Start Jenkins............'
                    sh 'echo docker : user = $DOCKER_CREDENTIALS_USR : password = $DOCKER_CREDENTIALS_PSW'
            }
        }
        stage('Build Docker Images') {
            steps {
                // dir('/')
                    sh 'echo "Running in $(pwd)"'
                    sh 'echo start build the Docker image = $DOCKER_IMAGE'
                    sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
         stage('Push to Docker Hub') {
            steps {
                script {
                    sh 'echo $DOCKER_CREDENTIALS_PSW | docker login --username $DOCKER_CREDENTIALS_USR --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
        stage('Clear Docker Components') {
            steps {
                script {
                    // sh 'echo kwai'
                    sh 'docker stop dev'  
                    sh 'docker rm dev' 
                    sh 'docker rmi $DOCKER_IMAGE'
                    // sh 'docker system prune -af'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker pull $DOCKER_IMAGE'
                    //i dont care
                    sh 'docker run -d --name dev --net=my-network -p 8085:8085 -p 8086:8086 -e DATABASE_URL="postgresql://postgres:Carbon-Rants-Dictation-Breeches-Spied-Nullify-Flagpole-Twitch4-Wrath-Liberty-Outboard@34.87.73.159:8087/BadContactDB" -e JWT_SECRET="JJIsj8fyPRUvDTGWW/IDH5/vw31DAxmGU3k6+zNIXpU=" $DOCKER_IMAGE'
                }
            }
        }
    }
    post {
        always {
            // Logout from Docker Hub
            sh 'docker logout'
        }
    }
}