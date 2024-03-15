"use client"

import { Button, Container, Text } from "@medusajs/ui"
import { resetOnboardingState } from "app/actions"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <Text className="text-ui-fg-base text-xl">
          Ваш тестовый заказ сформирован! 🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          Завершите настройку в админке.
        </Text>
        <Button
          className="w-fit"
          size="xlarge"
          onClick={() => resetOnboardingState(orderId)}
        >
          Complete setup in admin
        </Button>
      </div>
    </Container>
  )
}

export default OnboardingCta
