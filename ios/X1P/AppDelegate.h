#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "RNSplashScreen.h" 

@interface AppDelegate : RCTAppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code

    [RNSplashScreen show];  // here
    // or
    //[RNSplashScreen showSplash:@"LaunchScreen" inRootView:rootView];
    return YES;
}
@end
