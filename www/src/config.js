// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7pe80k5b3d6ruq46ifbm33tqrc",     // CognitoClientID
  "api_base_url": "https://71eci2isn9.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-webapp.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1o5y1egnte5ph.amplifyapp.com"                                      // AmplifyURL
};

export default config;
