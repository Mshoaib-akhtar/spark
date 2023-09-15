chrome.webRequest.onBeforeRequest.addListener(function(details)
{
  return {cancel:true};
},
{urls:
[ "*://*.ahrefs.com/account/*","*://*.ahrefs.com/user/logout*","*://*.semrush.com/sso/*","*://*.semrush.com/billing-admin/*","*://*.semrush.com/billing/*","*://*.semrush.com/prices/*","*://*.moz.com/logout/*","*://*.moz.com/community/*","*://*.moz.com/account/*","*://*.moz.com/subscriptions/*","*://*.moz.com/auth/*","*://*.moz.com/billing/*","*://*.moz.com/checkout/*","*://*.moz.com/email/*","*://*.moz.com/users/auth/*","*://*.alexa.com/account/*","*://*.alexa.com/logout*","*://*.semrush.com/accounts/*","*://*.alexa.com/pro/subscription*","*://*.alexa.com/password/change*","*://*.alexa.com/email/requestchange*","*://*.magisto.com/account*","*://*.seoprofiler.com/account/*","*://*.spyfu.com/account/*","*://*.spyfu.com/auth/logout*","*://*.spinrewriter.com/action/log-out*","*://*.elements.envato.com/sign-out*","*://*.keywordrevealer.com/auth/logout*","*://*.keywordrevealer.com/auth/profile*","*://*.app.buzzsumo.com/settings/*","*://*.woorank.com/en/logout*","*://*.woorank.com/en/user/*","*://*.canva.com/account*","*://*.canva.com/logout*","*://*.linkedin.com/psettings/*","*://*.linkedin.com/m/logout/*","*://*.linkedin.com/help/learning*","*://*.linkedin.com/learning/logout*","*://*.skillshare.com/help*","*://*.skillshare.com/profile/*","*://*.skillshare.com/settings/*","*://*.skillshare.com/teams*","*://*.skillshare.com/help*","*://*.skillshare.com/logout*","*://*.stockunlimited.com/account*","*://*.stockunlimited.com/purchase_plan.php*","*://*.stockunlimited.com/download_history.php*","*://*.stockunlimited.com/preferences.php*","*://*.stockunlimited.com/auth_action.php?action=logout*","*://*.freepik.com/profile/preagreement/getstarted*","*://*.freepik.com/profile/my_subscriptions*","*://*.support.freepik.com/*","*://*.pngtree.com/login/logout*","*://*.pngtree.com/user/my-subscriptions*","*://*.upload.pngtree.com/?r=upload*","*://*.pngtree.com/invite-friends*","*://*.pngtree.com/user/my-profile*","*://*.pngtree.com/notice*","*://*.support.storyblocks.com/*","*://*.storyblocks.com/member/logout*","*://*.videoblocks.com/member/profile*","*://*.support.audioblocks.com/*","*://*.audioblocks.com/member/logout*","*://*.indexification.com/support.php*","*://*.indexification.com/members/integration.php*","*://*.indexification.com/members/api.php*","*://*.indexification.com/members/billing.php*","*://*.indexification.com/members/profile.php*","*://*.articlebuilder.net/?action=logout*","*://*.copywritely.com/account/*","*://*.app.ninjaoutreach.com/Settings*","*://*.app.ninjaoutreach.com/StripeWorkflow*","*://*.renderforest.com/logout*","*://*.renderforest.com/subscription*","*://*.renderforest.com/profile*","*://*.netflix.com/YourAccount*","*://*.netflix.com/SignOut*",]},
["blocking"]
);












