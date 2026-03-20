pipeline{

        agent any 
        environment{
            DOCKERIMG = "maheshg98/trivia_frontend:${BUILD_NUMBER}"
            CONTNRNAME = "trivia-frontend"
            NETWORK = "trivia-network"
        }

        stages{

            stage('Git-checkout'){

                steps{

                    git branch: 'main',
                    url: 'https://github.com/gavademahesh98/Trivia_Frontend_Services.git'
                }
            }

            stage('build-image'){
                steps{
                    sh """
                    docker build -t ${DOCKERIMG} .
                
                    """
                }
            }

            stage('Push-img-repository') {
            steps {
                sh """
                    docker login -u maheshg98 -p Mahesh@8798
                    docker push ${DOCKERIMG}
                """
            }
        }

        stage('deployment'){
            steps{

                sh """
                docker kill ${CONTNRNAME} || true
                    docker rm ${CONTNRNAME} || true
                    docker run -d \
                    -p 80:80 \
                    --name ${CONTNRNAME} \
                    --network ${NETWORK} \
                    --restart unless-stopped \
                    ${DOCKERIMG}
                """
                
            }
        }


        }
}