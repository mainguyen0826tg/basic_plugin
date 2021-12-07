// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
    IDashboardEventHandling,
    IDashboardWidgetProps,
    newDashboardSection,
    newDashboardItem,
    newCustomWidget,
    InsightComponentProvider,
    IDashboardInsightProps,
    ICustomDashboardEvent,
    DashboardEventBody,
    useDashboardEventDispatch,
    KpiComponentProvider,
    IDashboardKpiProps,
} from "@gooddata/sdk-ui-dashboard";

import packageJson from "../../package.json";
import React, {useMemo} from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { idRef, IMeasure, IMeasureDefinition, modifyMeasure, newMeasure } from "@gooddata/sdk-model";

/*
 * Component to render 'myCustomWidget'. If you create custom widget instance and also pass extra data,
 * then that data will be available in
 */

const style = { height: 200 };
const styleB= {color: "white", padding: "20px", background: "#4CAF50"};

const a: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaEGaXAEgB7U", "measure"));

const Amount = modifyMeasure(a, (m) => m.format("#,##0").alias("$ Total Sales"));

const BarChartExample = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart measures={[Amount]}/>
        </div>
    );
};

function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return (
        <div style={style} className="s-insightView-headline">
            <InsightView insight={"aal3pDJA56AU"} showTitle="Hello from custom widget - Adding InsightView" />
        </div>
            
    );
}

function customDecoratorKPI(next: KpiComponentProvider): KpiComponentProvider {
    return (kpi, widget) => {
        function MyCustomDecorator(props: JSX.IntrinsicAttributes & IDashboardKpiProps & { children?: React.ReactNode; }) {
            const Decorated = useMemo(() => next(kpi, widget)!, [kpi, widget]);

            return (
                <div style={{height:"100%"}}>
                    <button>My Custom Decoration say Hi</button>
                    <Decorated {...props} />
                </div>
            );
        }

        return MyCustomDecorator;
    };
}

type MyCustomEvent = ICustomDashboardEvent<{ greeting: string }>;

const TestWidget: React.FC = () => {
    const dispatch = useDashboardEventDispatch();
    return (
        <button
            type="button" style = {styleB}
            onClick={() => {
                // trigger the custom event
                const event: DashboardEventBody<MyCustomEvent> = {
                    // custom event names must start with `CUSTOM/EVT` prefix
                    type: "CUSTOM/EVT/MY_EVENT",
                    payload: {
                        greeting: "Hello_testing custom event",
                    },
                };
                dispatch(event);
            }}
        >
            Testing custom event
        </button>
    );
};



export class Plugin extends DashboardPluginV1 {
    public readonly author = packageJson.author;
    public readonly displayName = packageJson.name;
    public readonly version = packageJson.version;

    public onPluginLoaded(_ctx: DashboardContext, parameters?: string): Promise<void> | void {


        
        console.log("This is parameters from 8.7.0: " + parameters)        
        /*
         * This will be called when the plugin is loaded in context of some dashboard and before
         * the register() method.
         *
         * If the link between the dashboard and this plugin is parameterized, then all the parameters will
         * be included in the parameters string.
         *
         * The parameters are useful to modify plugin behavior in context of particular dashboard.
         *
         * Note: it is safe to delete this stub if your plugin does not need any specific initialization.
         */
    }

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        // Add new insight to dashboard 
        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
        customize.customWidgets().addCustomWidget("myCustomWidget1", TestWidget);

        // Add new section with insight
        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(
                0,
                newDashboardSection(
                    "Section Added By Plugin",
                    newDashboardItem(newCustomWidget("myWidget1", "myCustomWidget"), {
                        xl: {
                            // all 12 columns of the grid will be 'allocated' for this this new item
                            gridWidth: 12,
                            // minimum height since the custom widget now has just some one-liner text
                            gridHeight: 1,
                        },
                    }),
                ),
            );
            
            // Add insight into exsiting section
            customizer.addItem(0,0,
                {
                  size: {
                    xl: {
                      gridWidth: 2
                    }
                  },
                  type: "IDashboardLayoutItem",
                  widget: {
                    customType: "myCustomWidget1",
                    identifier: "foo1",
                    ref: idRef("foo1"),
                    type: "customWidget",
                    uri: "foo1/bar1",
                    
                  },  
                },
                );
        });

         // The insight which tagged with some-tag will be replaced by BarChartExample
         customize.insightWidgets().withTag("some-tag", BarChartExample);

        // Decorator for KPI/Insight using InsightComponentProvider/ KpiComponentProvider 
        customize.kpiWidgets().withCustomDecorator(customDecoratorKPI);

        handlers.addEventHandler("GDC.DASH/EVT.INITIALIZED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### Dashboard initialized", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.FILTER_CONTEXT.ATTRIBUTE_FILTER.SELECTION_CHANGED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### Dashboard changed filter", evt);
        });

        handlers.addCustomEventHandler({
            eval: (e) => e.type === "CUSTOM/EVT/MY_EVENT",
            handler: (e: MyCustomEvent) => {
                // eslint-disable-next-line no-console
                console.log("Custom event received", e.payload?.greeting);
            },
        });
    }

    public onPluginUnload(_ctx: DashboardContext): Promise<void> | void {
        /*
         * This will be called when user navigates away from the dashboard enhanced by the plugin. At this point,
         * your code may do additional teardown and cleanup.
         *
         * Note: it is safe to delete this stub if your plugin does not need to do anything extra during unload.
         */
    }
}


