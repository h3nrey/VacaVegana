-- CreateTable
CREATE TABLE "CookStepsOnRecipes" (
    "cookStepId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "CookStepsOnRecipes_pkey" PRIMARY KEY ("cookStepId","recipeId")
);

-- CreateTable
CREATE TABLE "CategoriesOnPosts" (
    "categoryId" INTEGER NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnPosts_pkey" PRIMARY KEY ("categoryId","postId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CookStepsOnRecipes_cookStepId_recipeId_key" ON "CookStepsOnRecipes"("cookStepId", "recipeId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnPosts_categoryId_postId_key" ON "CategoriesOnPosts"("categoryId", "postId");

-- AddForeignKey
ALTER TABLE "CookStepsOnRecipes" ADD CONSTRAINT "CookStepsOnRecipes_cookStepId_fkey" FOREIGN KEY ("cookStepId") REFERENCES "CookStep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CookStepsOnRecipes" ADD CONSTRAINT "CookStepsOnRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPosts" ADD CONSTRAINT "CategoriesOnPosts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPosts" ADD CONSTRAINT "CategoriesOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
