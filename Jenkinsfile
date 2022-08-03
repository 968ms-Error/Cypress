pipeline 
{
    agent any

    stages 
    {
        stage('Build') 
        {
            steps 
            {
                sh "npx cypress verify"
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
