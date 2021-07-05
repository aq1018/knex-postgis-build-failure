# knex-postgis-build-failure
Demonstrate `knex-postgis` build failure

To see the failure, clone this repo and run:

```
npm install
npm run build
```

You will see:

```
node_modules/knex-postgis/types/index.d.ts:4:33 - error TS2694: Namespace '"/Users/aaronqian/projects/Playhouse/knex-postgis-test/node_modules/knex/types/index"' has no exported member 'Raw'.

4 type ColumnName = string | Knex.Raw | Knex.QueryBuilder;
                                  ~~~

node_modules/knex-postgis/types/index.d.ts:4:44 - error TS2694: Namespace '"/Users/aaronqian/projects/Playhouse/knex-postgis-test/node_modules/knex/types/index"' has no exported member 'QueryBuilder'.

4 type ColumnName = string | Knex.Raw | Knex.QueryBuilder;
                                             ~~~~~~~~~~~~

node_modules/knex-postgis/types/index.d.ts:6:40 - error TS2694: Namespace '"/Users/aaronqian/projects/Playhouse/knex-postgis-test/node_modules/knex/types/index"' has no exported member 'Raw'.

6 interface ExtendedKnexRaw extends Knex.Raw {
                                         ~~~

node_modules/knex-postgis/types/index.d.ts:10:36 - error TS2709: Cannot use namespace 'Knex' as a type.

10 declare function KnexPostgis(knex: Knex): KnexPostgis.KnexPostgis;
                                      ~~~~

test.ts:4:17 - error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string | Config<any>'.
  Type 'undefined' is not assignable to type 'string | Config<any>'.

4 const db = knex(process.env.DATABASE_URL)
                  ~~~~~~~~~~~~~~~~~~~~~~~~

```

