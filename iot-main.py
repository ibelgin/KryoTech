from tkinter import Toplevel, Button, Tk, Menu, Label
import os
from tkinter import *
from tkinter import StringVar
import serial
import time
from time import sleep
import os
from firebase import firebase
import Adafruit_DHT as dht
import smbus
import sys
import math
#import selenium
#from selenium.webdriver.common.by import By
import webbrowser
#from selenium import webdriver
from tkinter import ttk
import webview
import urllib.request
#from selenium.webdriver.chrome.service import Service
#from webdriver_manager.chrome import ChromeDriverManager
firebase = firebase.FirebaseApplication(
    'https://iot-based-database-default-rtdb.firebaseio.com/', None)
EMULATE_HX711 = False
referenceUnit = 1
if not EMULATE_HX711:
    import RPi.GPIO as GPIO
    from hx711 import HX711
else:
    from emulated_hx711 import HX711
bus = smbus.SMBus(1)
address = 0x48
DHT = 26
places = int(2)
hx = HX711(5, 6)
hx.set_reading_format("MSB", "MSB")
hx.reset()
hx.tare()
hx.set_reference_unit(113)
hx.set_reference_unit(referenceUnit)


def read(control):
    write = bus.write_byte_data(address, control, 0)
    read = bus.read_byte(address)
    return read


top = Tk()
top.geometry('1920x1080')

top.configure(bg='#7d2ae8')


def sensor():
    h = StringVar()
    t = StringVar()
    val = StringVar()
    ampsA0 = StringVar()
    ain0 = StringVar()
    pwr = StringVar()
    h.set(h)
    t.set(t)
    val.set(val)
    ain0.set(ain0)
    ampsA0.set(ampsA0)
    pwr.set(pwr)
    h, t = dht.read_retry(dht.DHT22, DHT)
    t = round(t, places)
    h = round(h, places)
    # Print Temperature and Humidity on Shell window
    print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(t, h))
    ain2 = read(0x43)
    ain0 = read(0x44)
    IrmsA0 = float(ain2 / float(2047) * 30)
    IrmsA0 = round(IrmsA0, places)
    ampsA0 = IrmsA0 / math.sqrt(2)
    ampsA0 = round(ampsA0, places)
    print("Current:", ampsA0, "Gas:", ain0)
    val = hx.get_weight(5)
    val = val/46.5
    val = abs(val/1000)
    val = round(val, places)
    print("Weight:", val)
    hx.power_down()
    hx.power_up()
    sleep(4)
    pwr = 230*ampsA0
    pwr = round(pwr, places)
    data = {
        '2345': {
            'temp': t,
            'humidity': h,
            'load': val,
            'gas': ain0
        }
    }
    result = firebase.post(
        'https://iot-based-database-default-rtdb.firebaseio.com/Sensors', data)
    print(result)
    weight1 = Label(top, text=val, font=("Rockwell extra bold",
                    80), bg='#7d2ae8').place(x=1500, y=460)
    temp1 = Label(top, text=t, font=("Rockwell extra bold", 80),
                  bg='#7d2ae8').place(x=140, y=460)
    hum1 = Label(top, text=h, font=("Rockwell extra bold", 80),
                 bg='#7d2ae8').place(x=750, y=460)
    title = Label(top, text="KRYO TECH", font=("Courier New", 100),
                  bg='#7d2ae8', fg="white").place(x=600, y=100)
    temp = Label(top, text='TEMPERATURE'+'('+u'\u00B0'+'C)',
                 font=("Cooper black", 40), bg='#7d2ae8').place(x=140, y=400)
    hum = Label(top, text="RELATIVE HUMIDITY (%)", font=(
        "Cooper black", 40), bg='#7d2ae8').place(x=750, y=400)
    weight = Label(top, text="WEIGHT (Kg)", font=(
        "Cooper black", 40), bg='#7d2ae8').place(x=1500, y=400)
    gas = Label(top, text="GAS (ppm)", font=("Cooper black", 40),
                bg='#7d2ae8').place(x=140, y=700)
    current = Label(top, text="CURRENT (Amps)", font=(
        "Cooper black", 40), bg='#7d2ae8').place(x=750, y=700)
    gas1 = Label(top, text=ain0, font=("Rockwell extra bold", 80),
                 bg='#7d2ae8').place(x=140, y=760)
    current1 = Label(top, text=ampsA0, font=(
        "Rockwell extra bold", 80), bg='#7d2ae8').place(x=750, y=760)
    power = Label(top, text="POWER (Watts)", font=(
        "Cooper black", 40), bg='#7d2ae8').place(x=1500, y=700)
    power1 = Label(top, text=pwr, font=("Rockwell extra bold",
                   80), bg='#7d2ae8').place(x=1500, y=760)
    top.after(1000, sensor)


top.after(1000, sensor)


def contact():
    toplevel = Toplevel(top)
    toplevel.title("CONTACT DETAILS")
    l9 = Label(toplevel, text="Contact details", font=("bold", 20))
    l9.grid(row=0, column=0)
    l10 = Label(toplevel, text="Mobile: +919361813434", font=("bold", 15))
    l10.grid(row=1, column=0)
    l12 = Label(toplevel, text="Mobile: +916374337604", font=("bold", 15))
    l12.grid(row=2, column=0)
    l11 = Label(toplevel, text="E-mail: technologykryo@gmail.com",
                font=("bold", 15))
    l11.grid(row=3, column=0)


def about():
    toplevel = Toplevel(top)
    toplevel.title("KRYO TECH")
    l9 = Label(toplevel, text="KRYO TECH", font=("Arial", 25))
    l9.grid(row=0, column=0)
    l10 = Label(
        toplevel, text="Experts in Onion cold storage solutions", font=("bold", 20))
    l10.grid(row=1, column=0)
    l11 = Label(toplevel, text="Mentor:", font=("Arial", 15))
    l11.grid(row=2, column=0)
    l11 = Label(
        toplevel, text='                                     '"Dr.Vignesh Kumar", font=("Arial", 15))
    l11.grid(row=3, column=0)
    l13 = Label(toplevel, text="Team members:", font=("Arial", 15))
    l13.grid(row=4, column=0)
    l12 = Label(toplevel, text='                                       '"1) Vishaal R", font=(
        "Arial", 15))
    l12.grid(row=5, column=0)
    l14 = Label(toplevel, text='                                                  '"2) Suraj Narayanan", font=(
        "Arial", 15))
    l14.grid(row=6, column=0)
    l15 = Label(toplevel, text='                                           '"3) Karthikeyan", font=(
        "Arial", 15))
    l15.grid(row=7, column=0)
    l16 = Label(toplevel, text='                                       '"4) Jagadish", font=(
        "Arial", 15))
    l16.grid(row=8, column=0)
    l17 = Label(toplevel, text='                                         '"5) Sudarshan", font=(
        "Arial", 15))
    l17.grid(row=9, column=0)
    l18 = Label(toplevel, text='                                       '"6) Kumaran", font=(
        "Arial", 15))
    l18.grid(row=10, column=0)
    l19 = Label(toplevel, text='                                     '"7) Jessica", font=(
        "Arial", 15))
    l19.grid(row=11, column=0)
    l20 = Label(toplevel, text='                                                '"8) Gnana Varshini", font=(
        "Arial", 15))
    l20.grid(row=12, column=0)
    l21 = Label(toplevel, text='                                     '"9) Kirthika", font=(
        "Arial", 15))
    l21.grid(row=13, column=0)


def ML():
    os.popen("edge-impulse-linux")
    url = "https://studio.edgeimpulse.com/studio/138801/classification"
    webbrowser.open(url)


menubar = Menu(top)
file = Menu(menubar, tearoff=0)
ras = Menu(menubar, tearoff=0)


menubar.add_cascade(label="Home", menu=file)
edit = Menu(menubar, tearoff=0)
edit.add_command(label="AHT10 Temperature")
edit.add_command(label="AHT10 Humidity")
edit.add_command(label="Weight")
menubar.add_cascade(label="SensorCM", menu=edit)
menubar.add_cascade(label="R&S Detector", menu=ras)
ras.add_command(label="Deploy ML", command=ML)
help = Menu(menubar, tearoff=0)
help.add_command(label="About", command=about)
help.add_command(label="Contact us", command=contact)
menubar.add_cascade(label="Help", menu=help)
top.config(menu=menubar)
top.mainloop()
