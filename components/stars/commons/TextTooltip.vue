<template>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <slot></slot>
        </TooltipTrigger>
        <TooltipContent>
          <p>{{ tooltip }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
</template>
<script>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default {
  name: "TextTooltip",
  props: {
    tooltip: {
      type: String,
      default: "Hover",
    },
  },
  components: {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  },
};
</script>
