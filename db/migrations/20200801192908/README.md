# Migration `20200801192908`

This migration has been generated by tundera at 8/1/2020, 7:29:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Player" ADD COLUMN "votes" integer  NOT NULL DEFAULT 0;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200801161841-add-players-and-teams-resources..20200801192908
--- datamodel.dml
+++ datamodel.dml
@@ -2,16 +2,16 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 // datasource sqlite {
 //     provider = "sqlite"
-//     url = "***"
+//     url = "***"
 // }
 // SQLite is easy to start with, but if you use Postgres in production
 // you should also use it in development with the following:
 datasource postgresql {
     provider = "postgresql"
-    url = "***"
+    url = "***"
 }
 generator client {
     provider = "prisma-client-js"
@@ -51,8 +51,9 @@
   name      String   
   number    Int      
   height    Int      
   weight    Int      
+  votes     Int      @default(0)
   team      Team     @relation(fields: [teamId], references: [id])
   teamId    Int      
 }
```

