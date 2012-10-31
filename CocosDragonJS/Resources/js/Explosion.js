var Explosion = function()
{
    this.radius = 15;
};

Explosion.prototype.onDidLoadFromCCB = function()
{
    this.rootNode.animationManager.setCompletedAnimationCallback(this.onAnimationComplete, this);
};

Explosion.prototype.onUpdate = function()
{};

Explosion.prototype.handleCollisionWith = function(gameObjectController)
{};

Explosion.prototype.onAnimationComplete = function(animationManager)
{
    cc.log("removing explosion!");
    this.isScheduledForRemove = true;
};