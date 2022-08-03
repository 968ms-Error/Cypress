pipeline 
{
    agent any

    stages 
    {
        stage('Verifying Cypress') 
        {
            steps 
            {
                git url: 'https://github.com/968ms-Error/Cypress.git'
                sh 'npx cypress verify'
            }
        }
    }
    post 
    {
        success 
        {
            echo 'This is a pipeline'
        }
    }
}
