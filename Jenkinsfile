pipeline{

    agent any 

    environment{
        DOCKERIMG= "maheshg98/frontend:${BUILD_NUMBER}"
        PROJECT= "trivia_frontend"
        DEPLY_DIR= "/opt/secretes/"
    }

    stages{

        stage('code-checkout'){

            steps{

                git branch: 'master',
                url: 'https://github.com/gavademahesh98/Trivia_Frontend_With_Compose.git'
                
            }
        }

        stage('build and Push'){
            steps{

                sh """ 
                docker build -t ${DOCKERIMG} .
                docker login -u maheshg98 -p Mahesh@8798
                docker push ${DOCKERIMG}
                """
            }

        }
        stage('deployment-via-compose'){
            steps{
            sh  """
                pwd
                ls -ltr
                docker compose -p ${PROJECT} --env-file /opt/secretes/.env down || true
                docker compose -p ${PROJECT} --env-file /opt/secretes/.env up -d
                
            """
            }
        }
    }
}